const express = require("express");
const path = require("path");
const routes = express.Router();

routes.get("/contactus", (req, res, next) => {
  //   res.send(`<h1>contactus page</h1>`);
  res.sendFile(path.join(__dirname, "../", "view", "contactus.html"));
});
module.exports = routes;
