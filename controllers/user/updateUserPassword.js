const { StatusCodes } = require('http-status-codes');

async function updateUserPassword(req, res){
  return res.status(StatusCodes.OK).json({
    message: 'update user password route'
  })
}

module.exports = updateUserPassword;