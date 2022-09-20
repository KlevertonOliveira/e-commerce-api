const { StatusCodes } = require('http-status-codes');

async function showCurrentUser(req, res){
  return res.status(StatusCodes.OK).json({
    message: 'Show current user route'
  })
}

module.exports = showCurrentUser;