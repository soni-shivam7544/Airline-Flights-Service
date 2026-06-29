const { StatusCodes } = require('http-status-codes');
const { ErrorResponse, SuccessResponse } = require('../utils/common');
const AppError = require('../utils/errors/app.errors');


function validateCreateRequest(req, res, next) {
    if(!req.body.city) {
        ErrorResponse.error = new AppError( ['City not found in the oncoming request body'], StatusCodes.BAD_REQUEST);
        ErrorResponse.message = 'Something went wrong while creating city';
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest
}