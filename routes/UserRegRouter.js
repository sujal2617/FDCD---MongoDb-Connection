const express = require("express");
const router = express.Router();
const UserReg = require("../Controller/UserRegController");

router.post("/UserReg", UserReg.CreateUserReg);
router.get("/UserReg", UserReg.GetAllUsers);
router.get("/UserReg/:name", UserReg.Get1User);
router.put("/UserReg/:name", UserReg.UpdateUser);
router.delete("/UserReg/:name", UserReg.DeleteUser);


module.exports = router;
