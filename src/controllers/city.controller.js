const { CityService } = require('../services');

const { StatusCodes } = require('http-status-codes');
const { ErrorResponse, SuccessResponse } = require('../utils/common');

/**
 * POST : /cities
 * @param {*} req body -> name
 * @param {*} res 
 * @returns a new city
 */

async function createCity(req, res) {
    try {
        const response = await CityService.createCity({
            name: req.body.name
        });
        SuccessResponse.data = response;
        SuccessResponse.message = "Successfully created the city";
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.message = 'Something went wrong while creating city',
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createCity
}