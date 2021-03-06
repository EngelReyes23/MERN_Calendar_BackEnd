/* 
  Rutas de autenticación de usuarios
  path: host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
//
const { login, register, renewToken } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validateFields');
const { validateJWT } = require('../middlewares/validateJWT');

const router = Router();

// Ruta principal
router.post(
  '/',
  [
    // middleware
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validateFields,
  ],
  login
);

router.post(
  '/register',
  [
    // middleware
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('password', 'El password debe tener mínimo 6 caracteres').isLength({
      min: 6,
    }),
    validateFields,
  ],
  register
);

router.get('/renewToken', validateJWT, renewToken);

module.exports = router;
