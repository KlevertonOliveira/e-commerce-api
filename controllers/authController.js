const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors');
const User = require('../models/User');

const register = async(req, res) => {

  const { email } = req.body;

  const emailAlreadyExists = await User.findOne({ email });
  if(emailAlreadyExists){
    throw new BadRequestError('Email already exists')
  }

  const user = await User.create(req.body);
  return res.status(StatusCodes.CREATED).json({ user })
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