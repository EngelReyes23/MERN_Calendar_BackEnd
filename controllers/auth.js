const { response } = require('express');
const bcrypt = require('bcryptjs');
//
const User = require('../models/User');
const { generateJTW } = require('../helpers/jwt');

// Login
const login = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    // Busca el usuario
    const user = await User.findOne({ email });

    // Si el usuario no existe
    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: 'Usuario con ese email no existe',
      });
    }

    // Si el usuario existe
    // Comprueba la contraseña
    const validPassword = bcrypt.compareSync(password, user.password);

    // Si la contraseña es incorrecta
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'Contraseña incorrecta',
      });
    }

    // Genera el token
    const token = await generateJTW(user.id, user.name);

    // Respuesta del login
    res.json({
      ok: true,
      msg: 'Login OK',
      uid: user.id,
      name: user.name,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error inesperado',
      error,
    });
  }
};

// Register
const register = async (req, res = response) => {
  const { email } = req.body;

  try {
    // Busca el usuario
    let user = await User.findOne({ email });

    // Si el usuario existe
    if (user) {
      return res.status(400).json({
        ok: false,
        msg: 'Ya existe un usuario con ese email',
      });
    }

    user = new User(req.body); // Crea el usuario

    // Encripta la contraseña
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(user.password, salt);

    await user.save(); // Guarda el usuario

    // Genera el token
    const token = await generateJTW(user.id, user.name);

    // Respuesta
    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: 'Error in the register',
      error,
    });
  }
};

// Renew token
const renewToken = (req, res = response) => {
  res.json({
    message: 'Renew token OK',
  });
};

// Export
module.exports = {
  login,
  register,
  renewToken,
};
