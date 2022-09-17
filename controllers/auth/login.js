const { StatusCodes } = require('http-status-codes');

async function login(req, res){
  return res.status(StatusCodes.OK).json({
    message: 'Login route'
  })
}

module.exports = login;
