const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const AdminRoute = require("./routes/admin");
const ShopRoute = require("./routes/shop");
const LoginRoute = require("./routes/login");

app.use(bodyParser.urlencoded({ extended: false }));

// app.use((req,res,next)=>{
//   var myval=
// })
app.use("/", (req, res, next) => {
  console.log("middleware one");
  next();
});

app.use("/admin", AdminRoute);
app.use(ShopRoute);
app.use(LoginRoute);
//notfound page
app.use((req, res, next) => {
  res.status(404).send("<h1  style=color:red>Page Not Found</h1>");
});
app.listen(3000);

//

//body-parser its creates middleware and process request
// app.use(bodyParser.urlencoded({ extended: false }));
// custom moudle
// const routes = require("./Router");
// console.log(routes.information);
// const textval = require("./form.txt");
// const server = http.createServer(routes.myhandler);
// const server = http.createServer(app);

//add middleware
// app.use("/", (req, res, next) => {
//   console.log("middleware one");
//   next();
// });

// app.use("/add-product", (req, res, next) => {
//   console.log("middleware two");
//   res.send(
//     "<form action=/product method=POST ><input type=text name=firstname ></input><br/><input type=text name=lastname ></input><br/><button>Add</button></form>"
//   );
//   // res.send({ name: "sam" });
// });

// app.use(AdminRoute);

// app.use(ShopRoute);
//express creates server for us
// app.listen(3000);

// by create venilla node js method
// server.listen(3000, () => {
//   console.log("3000 port called");
// });
