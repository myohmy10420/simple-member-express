export default function staticDemo(req, res) {
  res.sendfile('./demo.html', {root: __dirname});
}
