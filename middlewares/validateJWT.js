const { response } = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (req, res = response, next) => {
  // Extrae el token del header
  const token = req.header('x-token');

  // Si no existe el token
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'No hay token',
    });
  }

  try {
    // Decodifica el token
    const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);

    // Crea una propiedad en el request
    req.uid = uid; // id del usuario
    req.name = name; // nombre del usuario
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Error inesperado',
      error,
    });
  }

  next();
};

module.exports = {
  validateJWT,
};
