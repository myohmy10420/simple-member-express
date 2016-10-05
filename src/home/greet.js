export default function greet(req, res) {
  const {greeting} = res.locals;

  if (greeting) {
  res.send(greeting);
  }
  else {
    res.send("hello world");
  }
}
