const { StatusCodes } = require('http-status-codes');
const User = require('../../models/User');

async function getAllUsers(req, res){

  const users = await User.find({ role: 'user' }).select('-password');
  return res.status(StatusCodes.OK).json({ users })
}

module.exports = getAllUsers;