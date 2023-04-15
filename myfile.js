const http = require("http");
const express = require("express");
const app = express();
// custom moudle
// const routes = require("./Router");
// console.log(routes.information);
// const textval = require("./form.txt");
// const server = http.createServer(routes.myhandler);
const server = http.createServer(app);

//add middleware
app.use((req, res, next) => {
  console.log("middleware one");
  next();
});

app.use((req, res, next) => {
  console.log("middleware two");
  res.send("<h1>hi am express js page </h1>");
  // res.send({ name: "sam" });
  // next()
});

//express creates server for us
app.listen(3000);

// by create venilla node js method
// server.listen(3000, () => {
//   console.log("3000 port called");
// });
