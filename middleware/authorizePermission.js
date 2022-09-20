const { ForbiddenAccessError } = require('../errors');

function authorizePermission(...roles){
  return function(req, res, next){
    const { role } = req.user;
  
    if(!roles.includes(role)){
      throw new ForbiddenAccessError('Unauthorized to access this route');
    }
  
    next();
  }
}

module.exports = authorizePermission;