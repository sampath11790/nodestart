const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// custom moudle
// const routes = require("./Router");
// console.log(routes.information);
// const textval = require("./form.txt");
// const server = http.createServer(routes.myhandler);
// const server = http.createServer(app);

//add middleware
app.use("/", (req, res, next) => {
  console.log("middleware one");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("middleware two");
  res.send(
    "<form action=/product method=POST ><input type=text name=firstname ></input><br/><input type=text name=lastname ></input><br/><button>Add</button></form>"
  );
  // res.send({ name: "sam" });
});

app.use("/product", (req, res, next) => {
  console.log("middleware two");
  console.log("body data===>", req.body);
  res.send("<h1>hi am express product page </h1>");
  // res.send({ name: "sam" });
});

app.use("/", (req, res, next) => {
  console.log("middleware three");
  res.send("<h1>hi this home page </h1>");
});
//express creates server for us
app.listen(3000);

// by create venilla node js method
// server.listen(3000, () => {
//   console.log("3000 port called");
// });
