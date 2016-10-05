export default function getUser (req, res, next) {
  console.log("here", req.body);
  const {username, password} = req.body;
  if (("admin" === username)&&("admin" === password)) {
    res.locals.user = {username};
    next();
  }
  res.status(404).send({
    message: "User not found"
  });
}
