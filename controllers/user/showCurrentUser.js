const { StatusCodes } = require('http-status-codes');

async function showCurrentUser(req, res){
  return res.status(StatusCodes.OK).json({ user: req.user });
}

module.exports = showCurrentUser;