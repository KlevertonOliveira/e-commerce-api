const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../../errors');
const User = require('../../models/User');
const { checkPermission } = require('../../utils');

async function getSingleUser(req, res){
  const { id: userId } = req.params;

  const user = await User.findById(userId).select('-password');

  if(!user){
    throw new NotFoundError(`No user found with id ${userId}`);
  } 

  checkPermission(req.user, user._id);
  return res.status(StatusCodes.OK).json({ user })
}

module.exports = getSingleUser;