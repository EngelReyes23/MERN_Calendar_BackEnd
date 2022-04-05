const { response } = require("express");

const login = (req, res = response) => {
	res.json({
		message: "Login OK",
	});
};

const register = (req, res = response) => {
	const { name, password, email } = req.body;

	if (!name || !password || !email)
		return res.status(400).json({
			ok: false,
			message: "Invalid data",
		});

	res.status(201).json({
		ok: true,
		message: "Register OK",
		user: {
			name,
			email,
		},
	});
};

const renewToken = (req, res = response) => {
	res.json({
		message: "Renew token OK",
	});
};

module.exports = {
	login,
	register,
	renewToken,
};
