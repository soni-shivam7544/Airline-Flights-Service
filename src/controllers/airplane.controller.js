const { AirplaneService } = require('../services');

const { StatusCodes } = require('http-status-codes');
const { ErrorResponse, SuccessResponse } = require('../utils/common');

/**
 * POST : /airplanes
 * @param {*} req body -> modelNumber, capacity
 * @param {*} res 
 * @returns a new airplane
 */

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

/**
 * GET: /airplanes
 * @param {*} req 
 * @param {*} res 
 * @returns all the airplanes
 */

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

/**
 * GET: /airplanes/:id
 * @param {*} req params -> id
 * @param {*} res 
 * @returns the airplane with the given id
 */

async function getAirplane(req, res) {
    try {
        const response = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = response;
        SuccessResponse.message = "Successfully fetched the airplane";
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.message = 'Something went wrong while fetching the airplane',
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}


/**
 * DELETE: /airplanes/:id
 * @param {*} req params -> id
 * @param {*} res 
 * @returns 0 if not deleted and 1 if deleted successfully.
 */

async function destroyAirplane(req, res) {
    try {
        const response = await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data = response;
        SuccessResponse.message = "Successfully deleted the airplane";
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.message = 'Something went wrong while deleting the airplane',
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/**
 * PATCH: /airplane/:id
 * @param {*} req params -> id, body -> data object to be updated with
 * @param {*} res 
 * @returns array containing only single element giving count of what no of row are updated
 */

async function updateAirplane(req, res) {
    try {
        const response = await AirplaneService.updateAirplane(req.params.id, req.body);
        SuccessResponse.data = response;
        SuccessResponse.message = "Successfully updated the airplane";
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.message = 'Something went wrong while updating the airplane',
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}