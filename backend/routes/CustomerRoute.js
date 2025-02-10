const express = require("express");
const route = express.Router();
const customerController = require("../controllers/customerController");

route.post("/customerdata",customerController.customerData);
route.get("/customerdisplay",customerController.customerDisplay);
route.post("/customerdelete",customerController.customerDelete);

module.exports = route;