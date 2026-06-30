const { FlightService } = require('../services');

const { StatusCodes } = require('http-status-codes');
const { ErrorResponse, SuccessResponse } = require('../utils/common');

/**
 * POST : /flights
 * @param {*} req body -> flightNumber, airplaneId, departureAirportId, arrivalAirportId, arrivalTime, departureTime, price, boardingGate, totalSeats
 * @param {*} res 
 * @returns a new flight
 */

async function createFlight(req, res) {
    try {
        const response = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats
        });
        SuccessResponse.data = response;
        SuccessResponse.message = "Successfully created the flight";
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.message = 'Something went wrong while creating flight',
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/**
 * DELETE: /flights/:id
 * @param {*} req params -> id
 * @param {*} res 
 * @returns 0 if not deleted and 1 if deleted successfully.
 */

async function destroyFlight(req, res) {
    try {
        const response = await FlightService.destroyFlight(req.params.id);
        SuccessResponse.data = response;
        SuccessResponse.message = "Successfully deleted the flight";
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.message = 'Something went wrong while deleting the flight',
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/**
 * PATCH: /flights/:id
 * @param {*} req params -> id, body -> data object to be updated with
 * @param {*} res 
 * @returns array containing only single element giving count of what no of row are updated
 */

async function updateFlight(req, res) {
    try {
        const response = await FlightService.updateFlight(req.params.id, req.body);
        SuccessResponse.data = response;
        SuccessResponse.message = "Successfully updated the flight";
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.message = 'Something went wrong while updating the flight',
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createFlight,
    destroyFlight,
    updateFlight
}