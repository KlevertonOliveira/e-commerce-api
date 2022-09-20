const { StatusCodes } = require('http-status-codes');

async function getAllUsers(req, res){
  return res.status(StatusCodes.OK).json({
    message: 'Get all users route'
  })
}

module.exports = getAllUsers;