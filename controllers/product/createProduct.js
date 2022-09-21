const { StatusCodes } = require('http-status-codes');
const Product = require('../../models/Product');

async function createProduct(req, res){
  req.body.user = req.user.id;
  const product = await Product.create(req.body);

  return res.status(StatusCodes.CREATED).json({ product });
}

module.exports = createProduct;