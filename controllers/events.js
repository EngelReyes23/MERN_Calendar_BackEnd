const { response } = require('express');
const { events } = require('../models/Event');
const Event = require('../models/Event');

// Crea un nuevo evento
const createEvent = async (req, res = response) => {
  // Crea un nuevo evento
  const event = new Event(req.body);

  try {
    // establece la relación con el usuario
    event.user = req.uid;

    // Guarda el evento
    const createdEvent = await event.save();

    // Respuesta
    res.status(201).json({
      ok: true,
      msg: 'Evento creado',
      createdEvent,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error al crear el evento',
    });
  }
};

// Obtiene todos los eventos
const getEvents = async (req, res = response) => {
  // Obtiene todos los eventos
  const eventList = await Event.find({}).populate('user', 'name');

  // Respuesta
  res.json({
    ok: true,
    msg: 'Todo esta bien',
    eventList,
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
