const express = require("express");

const routes = express.Router();

routes.get("/add-product", (req, res, next) => {
  console.log("middleware two");
  res.send(
    "<form action=/admin/product method=POST ><input type=text name=firstname ></input><br/><input type=text name=lastname ></input><br/><button>Add</button></form>"
  );
  // res.send({ name: "sam" });
});

routes.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = routes;
