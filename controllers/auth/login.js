const { StatusCodes } = require('http-status-codes');
const { BadRequestError, UnauthenticatedError } = require('../../errors');
const { attachCookiesToResponse, createTokenUser } = require('../../utils');
const User = require('../../models/User');

async function login(req, res){

  const { email, password } = req.body;
  if(!email || !password){
    throw new BadRequestError('Please, provide email and password');
  }

  const user = await User.findOne({ email });
  if(!user){
    throw new UnauthenticatedError('Invalid credentials');
  }

  const isPasswordCorrect =  await user.comparePassword(password);
  if(!isPasswordCorrect){
    throw new UnauthenticatedError('Invalid credentials');
  }

  const tokenUser = createTokenUser(user);

  attachCookiesToResponse({ res, user: tokenUser })

  return res.status(StatusCodes.OK).json({ user: tokenUser })
}

module.exports = login;
