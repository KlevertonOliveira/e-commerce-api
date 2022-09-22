const { StatusCodes } = require('http-status-codes');
const { BadRequestError, UnauthenticatedError } = require('../../errors');
const User = require('../../models/User');

async function updateUserPassword(req, res){
  const { oldPassword, newPassword } = req.body;

  if(!oldPassword || !newPassword){
    throw new BadRequestError('Please, provide both old and new passwords.')
  }

  const user = await User.findById(req.user.id);

  const isPasswordCorrect = await user.comparePassword(oldPassword);
  
  if(!isPasswordCorrect){
    throw new UnauthenticatedError(`Invalid Credentials`);
  }

  user.password = newPassword;

  await user.save();

  return res.status(StatusCodes.OK).send({ message: 'Success! Password updated.' });
}

module.exports = updateUserPassword;