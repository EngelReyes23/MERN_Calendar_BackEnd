/* 
  Rutas de autenticación de usuarios
  host + /api/auth
*/

const { Router } = require("express");
const router = Router();

// Ruta principal
router.get("/", (req, res) => {
	console.log("Petición GET a la ruta /");
	res.json({
		message: "Hola mundo",
	});
});

module.exports = router;
