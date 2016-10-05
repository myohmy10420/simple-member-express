import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import Csrf from 'csrf';

import * as user from './user';
import * as page from './page';

const port = process.env.PORT || 3000;
const app = express();
const csrf = new Csrf();

fs.writeFileSync('passwd.txt', '{}');


app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));

app.locals.secret = csrf.secretSync();

app.use((req, res, next) => {
  if ('GET' === req.method) {
    const {secret} = app.locals;
    const csrfToken = csrf.create(secret);
    res.set('X-Csrf-Token', csrfToken);
  }
  next();
});

function checkCsrfToken(req, res, next) {
  const {csrfToken} = req.body;
  if (! csrf.verify(req.app.locals.secret, csrfToken)) {
    return next('Invalid CSRF Token');
  }
  next();
}

app.get('/login', page.serveLogin);
app.get('/register', page.serveRegister);

app.post('/api/login', checkCsrfToken, user.login);
app.post('/api/register', checkCsrfToken, user.register);

app.use((err, req, res, next) => {
  console.error('Error: %s', err);
  res.status(500)
    .send('Sorry ! Something has gone wrong.');
});

app.listen(port, () => {
  console.log('Example app listening on port %s', port);
});
