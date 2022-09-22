const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../../errors');
const User = require('../../models/User');
const { createTokenUser, attachCookiesToResponse } = require('../../utils');

async function updateUser(req, res){

  const { name, email } = req.body;

  if(!name || !email){
    throw new BadRequestError('Please, provide name and email values');
  } 

  const user = await User.findByIdAndUpdate(
    req.user.id,
    { email, name },
    {new: true, runValidators: true}    
  );

  const tokenUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokenUser });

  return res.status(StatusCodes.OK).json({ user: tokenUser })
}

module.exports = updateUser;