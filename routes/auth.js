/* 
  Rutas de autenticación de usuarios
  host + /api/auth
*/

const { Router } = require("express");
const router = Router();
const { login, register, renewToken } = require("../controllers/auth");

// Ruta principal
router.post("/", login);

router.post("/register", register);

router.get("/renewToken", renewToken);

module.exports = router;
