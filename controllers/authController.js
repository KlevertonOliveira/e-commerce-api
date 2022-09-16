const { StatusCodes } = require('http-status-codes');

const register = async(req, res) => {
  return res.status(StatusCodes.CREATED).json({
    message: 'Register route'
  })
}

const login = async(req, res) => {
  return res.status(StatusCodes.OK).json({
    message: 'Login route'
  })
}

const logout = async(req, res) => {
  return res.status(StatusCodes.CREATED).json({
    message: 'Logout route'
  })
}

module.exports = {
  register,
  login, 
  logout
}