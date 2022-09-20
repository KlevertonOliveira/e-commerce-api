const { StatusCodes } = require('http-status-codes');

async function getSingleUser(req, res){
  return res.status(StatusCodes.OK).json({
    message: 'Get single user route'
  })
}

module.exports = getSingleUser;