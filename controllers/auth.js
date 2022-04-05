const { response } = require("express");
const User = require("../models/User");

// Login
const login = (req, res = response) => {
	res.json({
		message: "Login OK",
	});
};

// Register
const register = async (req, res = response) => {
	// const { name, email } = req.body;

	try {
		const user = new User(req.body);

		await user.save();

		res.status(201).json({
			ok: true,
			message: "Register OK",
		});
	} catch (error) {
		res.status(500).json({
			ok: false,
			message: "Error in the register",
			error,
		});
		new Error("Error creating user");
	}
};

// Renew token
const renewToken = (req, res = response) => {
	res.json({
		message: "Renew token OK",
	});
};

// Export
module.exports = {
	login,
	register,
	renewToken,
};
