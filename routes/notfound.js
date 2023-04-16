const express = require("express");

const routes = express.Router();

routes.post((req, res, next) => {
  res.status(404).send("<h1  style=color:red>Page Not Found</h1>");
});

module.exports = routes;
