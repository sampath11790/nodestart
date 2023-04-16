const express = require("express");
const path = require("path");
const routes = express.Router();
const successController = require("../controller/successControl");
routes.post("/success", successController.getSuccess);
module.exports = routes;
