const UserModel = require("../models/userModel")

const Registration=async(req,res)=>{
    const{name,email,mobile,password} = req.body;
    try {
        await UserModel.create({
            name,
            email,
            mobile,
            password
        })
        res.status(200).send({msg:"user Registration Success!!"});
    } catch (error) {
        res.status(400).send({msg:"something went wrong!!"})
    }
    res.send("OKK")
}

const Login=async(req,res)=>{
    const{email,password} = req.body;
    try {
        const Data = await UserModel.findOne({"email": { $regex: email,$options:'i'}});
        if(Data.password!=password){
            res.status(400).send({msg:"password not match!!"});
        }else{
        res.status(200).send(Data);
        }
    } catch (error) {
        res.status(400).send({msg:"something went wrong !!"})
    }
}

module.exports = {
    Registration,
    Login
}