const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../../errors');
const { checkPermission } = require('../../utils');

const Order = require('../../models/Order');

async function getSingleOrder(req, res){

  const { id: orderId } = req.params;

  const order = await Order.findById(orderId);

  if(!order){
    throw new NotFoundError(`No order found with id ${orderId}`);
  }

  checkPermission(req.user, order.user);

  return res.status(StatusCodes.OK).json({ order })
};

module.exports = getSingleOrder;