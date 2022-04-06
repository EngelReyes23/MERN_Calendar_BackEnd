const { response } = require('express');
const { events } = require('../models/Event');
const Event = require('../models/Event');

// Crea un nuevo evento
const createEvent = async (req, res = response) => {
  const event = new Event(req.body);

  try {
    event.user = req.uid;

    const createdEvent = await event.save();

    res.status(201).json({
      ok: true,
      msg: 'Evento creado',
      createdEvent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error al crear el evento',
    });
  }
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
