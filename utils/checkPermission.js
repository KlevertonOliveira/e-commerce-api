const { ForbiddenAccessError } = require('../errors');

function checkPermission(requestUser, resourceUserId){
  if(requestUser.role === 'admin') return;
  if(requestUser.id === resourceUserId.toString()) return;

  throw new ForbiddenAccessError('Not authorized to access this route.');
}

module.exports = checkPermission