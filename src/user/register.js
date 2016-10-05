import fs from 'fs';
import bcrypt from 'bcryptjs';

export default function register(req, res) {
  const {username, password} = req.body;
  console.log('username, password', username, password);

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  const json = fs.readFileSync('passwd.txt', 'utf8');
  let data = JSON.parse(json);

  if (username in data) {
    return res.send(`username ${username} already exists`);
  }

  if (username && password) {
    data[username] = {username, password: hashedPassword};

    const content = JSON.stringify(data);
    fs.writeFileSync('passwd.txt', content, {encoding: 'utf8'});

    return res.send('Register Successfully.');
  }
  res.send('Either username or password is invalid.');
}
