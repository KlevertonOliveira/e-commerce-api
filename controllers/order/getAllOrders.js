const { StatusCodes } = require('http-status-codes');

async function getAllOrders(req, res){
  return res.status(StatusCodes.OK).json({
    message: 'Get All Orders Route'
  })
};

module.exports = getAllOrders;