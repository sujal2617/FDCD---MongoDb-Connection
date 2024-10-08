const express=require("express");
const router=express.Router();
const userReg=require("../Controller/UserRegController")


router.post("/userReg",userReg.CreateUserReg);
router.get("/userReg",userReg.GetAllUsers);

module.exports=router;