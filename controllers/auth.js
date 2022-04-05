const { response } = require("express");
const { validationResult } = require("express-validator");

// Login
const login = (req, res = response) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({
			ok: false,
			errors: errors.mapped(),
		});
	}

	res.json({
		message: "Login OK",
	});
};

// Register
const register = (req, res = response) => {
	const { name, email } = req.body;

	const results = validationResult(req);

	if (!results.isEmpty()) {
		return res.status(400).json({
			ok: false,
			errors: results.mapped(),
		});
	}

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
