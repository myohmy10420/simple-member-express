export default function getUser (req, res, next) {

  const {username, password} = req.body;
  if (("admin" === username)&&("admin" === password)) {
    res.locals.user = {username};
    return next();
  }

  console.warn("Loging failed attempt");

  res.status(404).send({
    message: "User not found"
  });
}
