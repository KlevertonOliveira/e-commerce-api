const { StatusCodes } = require('http-status-codes');
const Product = require('../../models/Product');

async function deleteProduct(req, res){
  const { id: productId } = req.params;
  const product = await Product.findById(productId);

  if(!product) throw new NotFoundError(`No product found with id ${productId}`);

  await product.remove();

  return res.status(StatusCodes.OK).json({ message: 'Success! Product removed.' });
}

module.exports = deleteProduct;