const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../../errors')
const { attachCookiesToResponse, createTokenUser } = require('../../utils');
const User = require('../../models/User');

async function register(req, res){
  
  const { name, email, password } = req.body;

  const emailAlreadyExists = await User.findOne({ email });

  if(emailAlreadyExists){
    throw new BadRequestError('Email already exists');
  } 

  const isFirstAccount = await User.countDocuments({}) === 0;
  const role = isFirstAccount ? 'admin' : 'user';

  const user = await User.create({ name, email, password, role });
  const tokenUser = createTokenUser(user);

  attachCookiesToResponse({ res, user: tokenUser });
  
  return res.status(StatusCodes.CREATED).json({ user: tokenUser })
}

module.exports = register;
