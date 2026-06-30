const { StatusCodes } = require('http-status-codes');
const { FlightRepository } = require('../repositories');
const AppError = require('../utils/errors/app.errors');

const flightRepository = new FlightRepository();

async function createFlight(data) {
    try {
        const flight = await flightRepository.create(data);
        return flight;
    } catch (error) {
        console.log(error);
        if(error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach(err => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }

        throw new AppError('Cannot create a new Flight object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyFlight(id) {
    try {
        const response = await flightRepository.destroy(id);
        return response;
    } catch(error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('Flight not found', StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot destroy the flight', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateFlight(id, data) {
    try{
        const response = await flightRepository.update(id, data);
        return response;
    } catch(error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('Flight not found', StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot update the flight', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createFlight,
    destroyFlight,
    updateFlight
}