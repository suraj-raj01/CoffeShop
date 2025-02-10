const CustomerModel = require("../models/customerModel")

const customerData=async(req,res)=>{
    const {customername,customeremail,customermobile} = req.body;
    try {
        await CustomerModel.create({
            customername: customername,
            customeremail: customeremail,
            customermobile: customermobile
        })
        res.status(200).send("customer data saved!")
    } catch (error) {
        res.status(400).send({msg:"something went wrong!!"});
    }
}

const customerDisplay = async(req,res) =>{
    try {
        const Data = await CustomerModel.find();
        res.status(200).send(Data);
    } catch (error) {
        res.status(400).send({msg:"something went wrong!"})
    }
}

const customerDelete = async(req,res) =>{
    const{id} = req.body;
    try {
        await CustomerModel.findByIdAndDelete(id);
        res.status(200).send("Customer details deleted !!");
    } catch (error) {
        res.status(400).send({msg:"something went wrong!!"})
    }
}

module.exports = {
    customerData,
    customerDisplay,
    customerDelete
}