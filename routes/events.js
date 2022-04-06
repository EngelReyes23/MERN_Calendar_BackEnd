/* 
  Ruta de manejo de eventos
  path : host + /api/events
*/
const { Router } = require('express');
//
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/events');

const router = Router();

// Creación de eventos
router.post('/', createEvent);

// Obtener todos los eventos
router.get('/', getEvents);

// Actualizar eventos
router.put('/:id', updateEvent);

// Eliminar eventos
router.delete('/:id', deleteEvent);

module.exports = router;
