const express = require("express");
const path = require("path");
const routes = express.Router();

routes.post("/success", (req, res, next) => {
  res.send(`<h1> "Form successfuly filled"</h1>`);
  //   res.sendFile(path.join(__dirname, "../", "view", "contactus.html"));
});
module.exports = routes;
