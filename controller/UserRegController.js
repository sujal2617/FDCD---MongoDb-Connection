const UserReg = require("../model/UserRegModel");

exports.CreateUserReg = async (req, res) => {
    try {
        const user = new UserReg(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.GetAllUsers = async (req, res) => {
    try {
        const users = await UserReg.find(); // Fix here: Find all users
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
