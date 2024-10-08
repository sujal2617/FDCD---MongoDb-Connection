const UserReg=require("../model/UserRegModel");

exports.CreateUserReg=async (req,res)=>{
    try{
        const user=new UserReg(req.body);
        await user.save();
        res.status(201).json(user);
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
}

exports.GateAllUsers=async (req,res)=>{
    try{
        const user=await
        res.status(201).json(user);
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
}