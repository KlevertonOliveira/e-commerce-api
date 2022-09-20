const BadRequestError = require('./BadRequestError');
const NotFoundError = require('./NotFoundError');
const UnauthenticatedError = require('./UnauthenticatedError');
const ForbiddenAccessError = require('./ForbiddenAccessError');

module.exports = {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
  ForbiddenAccessError
}