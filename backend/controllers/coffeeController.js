const CoffeeModel = require("../models/coffeeModels")
const InsertCoffee=async(req,res)=>{
    const {coffeename,description,price,discount,imageurl} = req.body;
    try {
            await CoffeeModel.create({
            coffee_name:coffeename,
            description:description,
            price:price,
            discount:discount,
            image_url:imageurl
        })
        res.status(200).send({msg:"ddta inserted success !!"})
    } catch (error) {
        res.status(400).send({msg:"data insertion failed !!"});
    }
}

const OrderDetails=async(req,res)=>{
    const{_id} = req.body;
    try {
        const Data = await CoffeeModel.findById(_id);
        res.status(200).send(Data);
    } catch (error) {
        res.status(400).send({msg:"something went wrong!!"})
    }
    
}

const ShowItemById = async(req,res)=>{
    const {id} = req.body;
    try {
        const Data = await CoffeeModel.findById(id)
        res.status(200).send(Data);
    } catch (error) {
        res.status(400).send({msg:"something went wrong!!"})
    }
}

const ShowArabicaCoffee=async(req,res)=>{
    const{coffee} = req.body;
    try {
        const Data = await CoffeeModel.find({"coffee_name":{$regex : coffee, $options:'i'}})
        res.status(200).send(Data);
    } catch (error) {
        res.status(400).send({msg:"something went wrong !!"})
    }
}

const ShowRobustaCoffee=async(req,res)=>{
    const{coffee} = req.body;
    try {
        const Data = await CoffeeModel.find({"coffee_name":{$regex : coffee, $options:'i'}})
        res.status(200).send(Data);
    } catch (error) {
        res.status(400).send({msg:"something went wrong !!"})
    }
}

const ShowBourbonCoffee=async(req,res)=>{
    const{coffee} = req.body;
    try {
        const Data = await CoffeeModel.find({"coffee_name":{$regex : coffee, $options:'i'}})
        res.status(200).send(Data);
    } catch (error) {
        res.status(400).send({msg:"something went wrong !!"})
    }
}

const ShowBlackCoffee=async(req,res)=>{
    const{coffee} = req.body;
    try {
        const Data = await CoffeeModel.find({"coffee_name":{$regex : coffee, $options:'i'}})
        res.status(200).send(Data);
    } catch (error) {
        res.status(400).send({msg:"something went wrong !!"})
    }
}

const ShowColdCoffee=async(req,res)=>{
    const{coffee} = req.body;
    try {
        const Data = await CoffeeModel.find({"coffee_name":{$regex : coffee, $options:'i'}})
        res.status(200).send(Data);
    } catch (error) {
        res.status(400).send({msg:"something went wrong !!"})
    }
}

const searchCoffee = async(req,res)=>{
    const{Coffee} = req.body;
    try {
        const Data = await CoffeeModel.find({"coffee_name": { $regex: Coffee,$options:'i'}});
        res.status(200).send(Data);
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    InsertCoffee,
    OrderDetails,
    ShowItemById,
    ShowArabicaCoffee,
    ShowRobustaCoffee,
    ShowBourbonCoffee,
    ShowBlackCoffee,
    ShowColdCoffee,
    searchCoffee
}