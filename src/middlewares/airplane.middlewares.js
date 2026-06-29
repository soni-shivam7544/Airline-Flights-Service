const { StatusCodes } = require('http-status-codes');
const { ErrorResponse, SuccessResponse } = require('../utils/common');
const AppError = require('../utils/errors/app.errors');


function validateCreateRequest(req, res, next) {
    if(!req.body.modelNumber) {
        ErrorResponse.error = new AppError( ['Model Number not found in the incoming request body'], StatusCodes.BAD_REQUEST);
        ErrorResponse.message = 'Something went wrong while creating airplane';
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

function validateUpdateRequest(req, res, next) {
    if(!req.body || Object.keys(req.body).length == 0){
        ErrorResponse.error = new AppError(['Can not update with empty data'], StatusCodes.BAD_REQUEST);
        ErrorResponse.message = 'Something went wrong while creating airplane';
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest,
    validateUpdateRequest
}