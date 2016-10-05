export default function serveLogin(req, res) {
  res.sendfile(__dirname + '/login.html');
}
