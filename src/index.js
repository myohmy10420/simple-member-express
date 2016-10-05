import express from "express";
import bodyParser from "body-parser";
import fs from 'fs';

import * as home from "./home";
import * as user from './user'

const port = process.env.PORT || 3000;
const app =  express();

fs.writeFileSync('passwd.txt', '{}');

app.locals.secret = "YOU-ACNT-SEE-ME";

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));

app.get("/", home.greet, home.getName);
app.post('/login', user.login);
app.post('/register', user.register);

app.use((err, req, res, next) => {
  console.error("Error: %s", err);
  res.status(500)
    .send("Sorry ! Something has gone wrong.");
});

app.listen(port, () => {
  console.log('Example app listening on port %s', port);
});
