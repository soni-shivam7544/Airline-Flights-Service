const { StatusCodes } = require('http-status-codes');
const { ErrorResponse, SuccessResponse } = require('../utils/common');
const AppError = require('../utils/errors/app.errors');


function validateCreateRequest(req, res, next) {
    if(!req.body.name) {
        ErrorResponse.error = new AppError( ['Name not found in the incoming request body'], StatusCodes.BAD_REQUEST);
        ErrorResponse.message = 'Something went wrong while creating city';
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest
}