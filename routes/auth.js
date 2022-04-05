/* 
  Rutas de autenticación de usuarios
  host + /api/auth

  db_user : mern_user
  db_pass : 65MOSIWYCJCoohgJ
*/

const { Router } = require("express");
const { check } = require("express-validator");
//
const { login, register, renewToken } = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validarCampos");

const router = Router();

// Ruta principal
router.post(
	"/",
	[
		// middleware
		check("email", "El email es obligatorio").isEmail(),
		check("password", "El password es obligatorio").not().isEmpty(),
		validarCampos,
	],
	login
);

router.post(
	"/register",
	[
		// middleware
		check("name", "El nombre es obligatorio").not().isEmpty(),
		check("email", "El email es obligatorio").isEmail(),
		check("password", "El password es obligatorio").not().isEmpty(),
		check("password", "El password debe tener mínimo 6 caracteres").isLength({
			min: 6,
		}),
		validarCampos,
	],
	register
);

router.get("/renewToken", renewToken);

module.exports = router;
