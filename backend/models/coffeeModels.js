const mongoose = require("mongoose");
const coffeeSchema = new mongoose.Schema({
    coffee_name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    discount:{
        type:Number,
        require : true
    },
    image_url:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model("coffee",coffeeSchema);