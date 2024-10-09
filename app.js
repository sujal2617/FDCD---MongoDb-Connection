const express = require("express");
const mongoose = require("mongoose");
const UserReg = require("./routes/UserRegRouter");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Helloworld!!!!!");
});

app.use("/v0/api", UserReg);

const URI = "mongodb://localhost:27017/dbconnect";
// mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("Mongodb Connected Successfully......"))
//     .catch((err) => {
//         console.log(err);
//     });
mongoose.connect(URI)
    .then(() => console.log("Mongodb Connected Successfully......"))
    .catch((err) => {
        console.log(err);
    });

app.listen(5000, () => {
    console.log("Server Run on 5000");
});









// import express from "express"
// import mongoose from "mongoose";
// import dotenv from "dotenv";
//
// const app = express();
// dotenv.config();
//
// const PORT = process.env.PORT || 7000;
// const MONGOURL = process.env.MONGO_URL;
//
// mongoose.connect(MONGOURL).then(() => {
//     console.log("Connected to MongoDB");
//     app.listen(PORT,()=>{
//         console.log(`Server is running on port ${PORT}`);
//     })
// }).catch(err => console.log(err));
//
// const userSchema = mongoose.Schema({
//     name: String,
//     age: Number,
// });
//
// const userModel=mongoose.model("User",userSchema);
//
// app.get("/getUsers",async(req,res)=>{
//     const userData = await userModel.find();
//     res.json(userData);
// });
