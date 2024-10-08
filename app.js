const express = require("express");
const mongoose = require("mongoose");
const UserReg=require("./Routes/UserRegRouter");

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Helloworld!!!!!");
});
app.use("/v0/api",UserReg)
const URI =
    ""
mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log("Mongodb Connected Successfully......"))
    .catch((err) => {
        console.log(err);
    });

app.listen(5000, () => {
    console.log("Server Run on 5000");
});