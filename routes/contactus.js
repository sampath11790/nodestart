const express = require("express");
const path = require("path");
const routes = express.Router();

const contactusController = require("../controller/contactusControl");

routes.get("/contactus", contactusController.getContactus);
module.exports = routes;
