const { response } = require('express');
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
const updateEvent = async (req, res = response) => {
  const eventId = req.params.id;
  const uid = req.uid;

  try {
    // Verifica que el evento exista
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: 'Evento no encontrado',
      });
    }

    // Verifica que el usuario sea el dueño del evento
    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'No tienes permisos para actualizar este evento',
      });
    }

    const eventUpdate = {
      ...req.body,
      user: uid,
    };

    // Actualiza el evento
    const updatedEvent = await Event.findByIdAndUpdate(eventId, eventUpdate, {
      new: true,
    });

    // Respuesta
    res.json({
      ok: true,
      msg: 'Evento actualizado',
      updatedEvent,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error al actualizar el evento',
    });
  }
};

// Elimina un evento
const deleteEvent = async (req, res = response) => {
  const eventId = req.params.id;
  const uid = req.uid;

  try {
    // Verifica que el evento exista
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: 'Evento no encontrado',
      });
    }

    // Verifica que el usuario sea el dueño del evento
    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'No tienes permisos para eliminar este evento',
      });
    }

    // Elimina el evento
    await Event.findByIdAndDelete(eventId);

    // Respuesta
    res.json({
      ok: true,
      msg: 'Evento eliminado',
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error al eliminar el evento',
    });
  }
};

module.exports = {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent,
};
