const { StatusCodes } = require('http-status-codes');

const Product = require('../../models/Product');
const Order = require('../../models/Order');

const { BadRequestError, NotFoundError } = require('../../errors');

async function fakeStripeAPI({ amount, currency }){
  const client_secret = 'someRandomValue';
  return { client_secret, amount };
}

async function createOrder(req, res){

  const { items: cartItems, tax, shippingFee } = req.body;

  if(!cartItems || cartItems.length < 1){
    throw new BadRequestError('No cart items provided');
  }

  if(!tax || !shippingFee){
    throw new BadRequestError('Please, provide tax and shipping fee');
  }

  let orderItems = [];
  let subtotal = 0;
  
  for(const item of cartItems){
    const dbProduct = await Product.findById(item.product);

    if(!dbProduct){
      throw new NotFoundError(`No product found with id ${item.product}`);
    }

    const { name, price, image, _id } = dbProduct;

    const singleOrderItem = {
      name,
      price,
      image,
      product: _id,
      amount: item.amount
    }

    orderItems = [...orderItems, singleOrderItem];
    subtotal += item.amount * price;
  }

  const total = tax + shippingFee + subtotal;

  // fake stripe
  const paymentIntent = await fakeStripeAPI({
    amount: total,
    currency: 'usd',
  })

  const order = await Order.create({
    orderItems,
    tax,
    shippingFee,
    subtotal,
    total,
    clientSecret: paymentIntent.client_secret,
    user: req.user.id,
  })

  return res.status(StatusCodes.CREATED).json({
    order,
    clientSecret: order.clientSecret
  })
};

module.exports = createOrder;