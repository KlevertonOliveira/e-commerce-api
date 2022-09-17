const { StatusCodes } = require('http-status-codes');

async function logout(req, res){

  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now())
  })
  
  return res.status(StatusCodes.OK).send();
}

module.exports = logout;