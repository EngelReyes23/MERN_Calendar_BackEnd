const { response } = require('express');

// Crea un nuevo evento
const createEvent = (req, res = response) => {
  res.status(201).json({
    ok: true,
    msg: 'Evento creado',
  });
};

// Obtiene todos los eventos
const getEvents = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Todo esta bien',
  });
};

// Actualiza un evento
const updateEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Evento actualizado',
  });
};

// Elimina un evento
const deleteEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Evento eliminado',
  });
};

module.exports = {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent,
};
