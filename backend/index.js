const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config();
const PORT = process.env.PORT || 8080;

const mydb = process.env.DB;
mongoose.connect(mydb).then(()=>{
    console.log("database connected success")
})


const coffeRoute = require("./routes/cofeeShopRoute")
const userRoute = require("./routes/userRoute");
const customerRoute = require("./routes/CustomerRoute")
// const PORT = 8080;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/coffeeshop",coffeRoute);
app.use("/user",userRoute);
app.use("/customer",customerRoute);

app.listen(PORT,()=>{
    console.log(`Server run on port ${PORT}`);
})