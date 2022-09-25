const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../../errors');
const Order = require('../../models/Order');

async function getCurrentUserOrders(req, res){

  const orders = await Order.find({ user: req.user.id });

  if(!orders){
    throw new NotFoundError(`No orders found for this user.`);
  }

  return res.status(StatusCodes.OK).json({ 
    nbHits: orders.length,
    orders
  })
};

module.exports = getCurrentUserOrders;