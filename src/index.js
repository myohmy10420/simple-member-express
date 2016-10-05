import express from "express";
import * as home from "./home";
import * as err from "./err";

const port = process.env.PORT || 3000;
const app =  express();

app.get("/", home.greet, home.getName);

app.get("/err", err.throwError);

app.use((err, req, res, next) => {
  console.error("Error: %s", err);
  res.status(500)
    .send("Sorry ! Something has gone wrong.");
});

app.listen(port, () => {
  console.log('Example app listening on port %s', port);
});
