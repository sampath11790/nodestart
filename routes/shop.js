const express = require("express");

const routes = express.Router();
routes.get("/", (req, res, next) => {
  console.log("middleware three");
  res.send("<h1>hi this home page </h1>");
});

module.exports = routes;
