const { StatusCodes } = require('http-status-codes');

async function updateUser(req, res){
  return res.status(StatusCodes.OK).json({
    message: 'Update user route'
  })
}

module.exports = updateUser;