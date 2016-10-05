import fs from 'fs';
import bcrypt from 'bcryptjs';

export default function register(req, res) {
  const {username, password} = req.body;
  console.log('username, password', username, password);
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  const content = `${username}:${hashedPassword}`
  if (username && password) {
    fs.writeFileSync('passwd.txt', content, {encoding: 'utf8', flag: 'a'});
    return res.send('Register Successfully.');
  }
  res.send('Either username or password is invalid.');
}
