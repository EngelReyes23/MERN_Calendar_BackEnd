const { response } = require("express");

// Login
const login = (req, res = response) => {
	res.json({
		message: "Login OK",
	});
};

// Register
const register = (req, res = response) => {
	const { name, email } = req.body;

	res.status(201).json({
		ok: true,
		message: "Register OK",
		user: {
			name,
			email,
		},
	});
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
