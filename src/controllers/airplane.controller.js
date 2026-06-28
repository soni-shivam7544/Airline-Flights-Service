const { AirplaneService } = require('../services');

const { StatusCodes } = require('http-status-codes');
const { ErrorResponse, SuccessResponse } = require('../utils/common');

async function createAirplane(req, res) {
    try {
        const response = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.data = response;
        SuccessResponse.message = "Successfully created the airplane";
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.message = 'Something went wrong while creating airplane',
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAirplanes(req, res) {
    try {
        const response = await AirplaneService.getAirplanes();
        SuccessResponse.data = response;
        SuccessResponse.message = "Successfully fetched all the airplanes";
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.message = 'Something went wrong while fetching the airplanes',
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createAirplane,
    getAirplanes
}