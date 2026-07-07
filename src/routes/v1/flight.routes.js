const express = require('express');

const router = express.Router();
const { FlightController } = require('../../controllers');
const { FlightMiddleware } = require('../../middlewares');


// /api/v1/flights  POST
router.post('/', FlightMiddleware.validateCreateRequest, FlightController.createFlight);

// /api/v1/flights GET
router.get('/', FlightController.getAllFlights);

// /api/v1/flights/:id GET
router.get('/:id', FlightController.getFlight);

// /api/v1/flights/:id DELETE
router.delete('/:id', FlightController.destroyFlight);

// /api/v1/flights/:id PATCH
router.patch('/:id', FlightMiddleware.validateUpdateRequest, FlightController.updateFlight);

// /api/v1/flights/:id/seats PATCH
router.patch('/:id/seats', FlightMiddleware.validateSeatsUpdateRequest, FlightController.updateSeats);

module.exports = router;