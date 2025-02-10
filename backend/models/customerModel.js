const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
    customername:{
        type:String,
        require:true
    },
    customeremail:{
        type:String,
        require:true,
    },
    customermobile:Number
})

module.exports = mongoose.model("customer",customerSchema)