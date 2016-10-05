import fs from 'fs';
import bcrypt from 'bcryptjs';

export default function login(req, res) {

  const {username, password} = req.body;
  const json = fs.readFileSync('passwd.txt', 'utf8') || '';
  const data = JSON.parse(json);
  const row = data[username];

  if (row && bcrypt.hashSync(password, row.password)) {
    return res.send(`Login Successfully. Hello ! ${username}`);
  }
  res.status(404)
    .send('User not found.');
}
