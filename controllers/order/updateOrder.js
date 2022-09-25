const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../../errors');
const { checkPermission } = require('../../utils');

const Order = require('../../models/Order');

async function updateOrder(req, res){

  const {
    params: { id: orderId },
    body: { paymentIntentId },
  } = req;

  const order = await Order.findById(orderId);

  if(!order){
    throw new NotFoundError(`No order found with id ${orderId}`);
  }

  checkPermission(req.user, order.user);

  order.paymentIntentId = paymentIntentId;
  order.status = 'paid';

  await order.save();

  return res.status(StatusCodes.OK).json({ order })
};

module.exports = updateOrder;