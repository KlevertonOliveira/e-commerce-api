const { isTokenValid } = require('../utils');
const { UnauthenticatedError } = require('../errors');

async function authenticateUser(req, res, next){
  const token = req.signedCookies.token;

  if(!token){
    throw new UnauthenticatedError('Authentication Invalid');
  }
  
  try {
    const { name, id, role} = isTokenValid({ token });
    req.user = { name, id, role };
    next();
  } 
  catch (error) {
    throw new UnauthenticatedError('Authentication Invalid');
  }
}

module.exports = authenticateUser;