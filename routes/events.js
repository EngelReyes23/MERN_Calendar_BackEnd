/* 
  Ruta de manejo de eventos
  path : host + /api/events
*/
const { Router } = require('express');
const { check } = require('express-validator');
//
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/events');
const { validateFields } = require('../middlewares/validateFields');
const { validateJWT } = require('../middlewares/validateJWT');

const router = Router();

// validateJWT en todas las rutas
router.use(validateJWT);

// Creación de eventos
router.post(
  '/',
  [
    check('title', 'El título es obligatorio').not().isEmpty(),
    check('start', 'La fecha de inicio es obligatoria').not().isEmpty(),
    check('start', 'La fecha no es valida').isDate(),
    check('end', 'La fecha de fin es obligatoria').not().isEmpty(),
    check('end', 'La fecha no es valida').isDate(),
    validateFields,
  ],
  createEvent
);

// Obtener todos los eventos
router.get('/', getEvents);

// Actualizar eventos
router.put('/:id', updateEvent);

// Eliminar eventos
router.delete('/:id', deleteEvent);

module.exports = router;
