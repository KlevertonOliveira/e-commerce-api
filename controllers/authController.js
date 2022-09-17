const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors');
const { attachCookiesToResponse } = require('../utils');
const User = require('../models/User');

const register = async(req, res) => {
  
  const { name, email, password } = req.body;

  const emailAlreadyExists = await User.findOne({ email });
  if(emailAlreadyExists){
    throw new BadRequestError('Email already exists')
  }

  const isFirstAccount = await User.countDocuments({}) === 0;
  const role = isFirstAccount ? 'admin' : 'user';

  const user = await User.create({ name, email, password, role });
  const tokenUser = { name: user.name, role: user.role, userId: user._id }

  attachCookiesToResponse({ res, user: tokenUser });
  
  return res
  .status(StatusCodes.CREATED)
  .json({ user: tokenUser })
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