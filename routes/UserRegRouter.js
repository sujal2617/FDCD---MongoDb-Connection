const express = require("express");
const router = express.Router();
const UserReg = require("../Controller/UserRegController");

router.post("/UserReg", UserReg.CreateUserReg);
router.get("/UserReg", UserReg.GetAllUsers);

module.exports = router;
