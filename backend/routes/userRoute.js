const express = require("express");
const route = express.Router();

const userController = require("../controllers/userController");
route.post("/register",userController.Registration);
route.post("/login",userController.Login);

module.exports = route;