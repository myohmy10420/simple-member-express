export default function login(req, res) {
  res.status(201)
    .send({
      message: `Login Successfully. Hello, ${res.locals.username}`
    });
}
