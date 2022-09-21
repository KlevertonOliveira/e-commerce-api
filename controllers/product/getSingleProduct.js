const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../../errors')
const Product = require('../../models/Product');

async function getSingleProduct(req, res){
  const { id: productId } = req.params;
  const product = await Product.findById(productId);

  if(!product) throw new NotFoundError(`No product found with id ${productId}`);

  return res.status(StatusCodes.OK).json({ product });
}

module.exports = getSingleProduct;