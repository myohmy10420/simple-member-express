export default function getName(req, res, next) {
  const {name} = req.query;
  if (name) {
    res.locals.greeting = `hello, ${name}`;
  }
  next();
}
