import express from "express";
import * as home from "./home";

const port = process.env.PORT || 3000;
const app =  express();

app.get('/', home.greet);

app.listen(port, () => {
  console.log('Example app listening on port %s', port);
});
