const { response } = require("express");

const login = (req, res = response) => {
	res.json({
		message: "Login OK",
	});
};

const register = (req, res = response) => {
	res.json({
		message: "Register OK",
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
