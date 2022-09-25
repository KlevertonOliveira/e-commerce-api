const { StatusCodes } = require('http-status-codes');
const Order = require('../../models/Order');

async function getAllOrders(req, res){

  const orders = await Order.find({});

  return res.status(StatusCodes.OK).json({ 
    nbHits: orders.length,
    orders
  })
};

module.exports = getAllOrders;