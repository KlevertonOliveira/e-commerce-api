const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./customAPIError');

class ForbiddenAccessError extends CustomAPIError{
  constructor(message){
    super(message);
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

module.exports = ForbiddenAccessError;