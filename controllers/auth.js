const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Login
const login = (req, res = response) => {
  res.json({
    message: 'Login OK',
  });
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

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: 'Error in the register',
      error,
    });
    new Error('Error creating user');
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
