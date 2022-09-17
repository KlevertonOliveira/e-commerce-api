const { StatusCodes } = require('http-status-codes');

async function logout(req, res){
  return res.status(StatusCodes.OK).json({
    message: 'Logout route'
  })
}

module.exports = logout;