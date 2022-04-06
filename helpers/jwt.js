const jwt = require('jsonwebtoken');

const generateJTW = async (uid, name) => {
  // Regresa una promesa para poder usar async await
  return new Promise((resolve, reject) => {
    // Cuerpo del payload
    const payload = { uid, name };

    // Opciones para el token
    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED,
      { expiresIn: '2h' },
      (err, token) => {
        if (err) {
          console.log('Error en el token');
          reject(err);
        } else resolve(token);
      }
    );
  });
};

module.exports = { generateJTW };
