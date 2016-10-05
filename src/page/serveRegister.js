export default function serveRegister(req, res) {
  res.sendfile(__dirname + '/register.html');
}
