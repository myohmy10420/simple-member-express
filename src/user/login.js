export default function login(req, res) {
  console.info('secret %s', req.app.locals.secret);
  res.status(201)
    .send({
      message: `Login Successfully. Hello, ${res.locals.username}`
    });
}
