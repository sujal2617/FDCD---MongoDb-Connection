const UserReg = require("../model/UserRegModel");

exports.CreateUserReg = async (req, res) => {
    try {
        const createusers = new UserReg(req.body);
        await createusers.save();
        res.status(201).json(createusers);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.GetAllUsers = async (req, res) => {
    try {
        const getusers = await UserReg.find();
        res.status(200).json(getusers);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.Get1User = async (req, res) => {
    try {
        const { name } = req.params; // Extract the name from request parameters
        const user = await UserReg.findOne({ name }); // Find user by name

        if (!user) {
            return res.status(404).json({ message: "User not found" }); // Handle case where user does not exist
        }

        res.status(200).json(user); // Return the user data
    } catch (err) {
        res.status(400).json({ message: err.message }); // Handle errors
    }
};

exports.UpdateUser = async (req, res) => {
    try {
        const { name } = req.params; // Extract the name from request parameters
        const updateData = req.body; // Get the data to update from the request body

        // Find the user by name and update their information
        const updatedUser = await UserReg.findOneAndUpdate({ name }, updateData, {
            new: true, // Return the updated document
            runValidators: true // Validate the updated data against the schema
        });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" }); // Handle not found
        }

        res.status(200).json(updatedUser); // Return the updated user data
    } catch (err) {
        res.status(400).json({ message: err.message }); // Handle errors
    }
};


exports.DeleteUser = async (req, res) => {
    try {
        const { name } = req.params; // Extract the name from request parameters

        // Find the user by name and delete them
        const deletedUser = await UserReg.findOneAndDelete({ name });

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" }); // Handle not found
        }

        res.status(200).json({ message: "User deleted successfully" }); // Confirm deletion
    } catch (err) {
        res.status(400).json({ message: err.message }); // Handle errors
    }
};



