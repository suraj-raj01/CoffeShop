const express = require("express");
const route = express.Router();
const coffeController = require("../controllers/coffeeController");

route.post("/coffeeinsert",coffeController.InsertCoffee);
route.post("/details",coffeController.OrderDetails);
route.post("/showitembyid",coffeController.ShowItemById);
route.post("/arabicashow",coffeController.ShowArabicaCoffee);
route.post("/robustashow",coffeController.ShowRobustaCoffee);
route.post("/bourboneshow",coffeController.ShowBourbonCoffee);
route.post("/blackcoffee",coffeController.ShowBlackCoffee);
route.post("/coldcoffee",coffeController.ShowColdCoffee);
route.post("/searchcoffee",coffeController.searchCoffee);

module.exports = route;