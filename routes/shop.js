const express = require("express");
const fs = require("fs");
const path = require("path");
const routes = express.Router();
routes.get("/", (req, res, next) => {
  console.log("middleware three");
  return fs.readFile("user.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    }
    res.sendFile(path.join(__dirname, "../", "view", "shop.html"));
    // res.send(data);
  });
  // res.send(`<h1>hi this home page </h1>`);
  // res.send(`<h1>hi this home page </h1>`);
});

module.exports = routes;
