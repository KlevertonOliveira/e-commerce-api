const { StatusCodes } = require('http-status-codes');
const Product = require('../../models/Product');

async function updateProduct(req, res){
  const { id: productId } = req.params;
  
  const product = await Product.findByIdAndUpdate(
    productId,
    req.body,
    {new: true, runValidators: true}
  );

  if(!product) throw new NotFoundError(`No product found with id ${productId}`);

  return res.status(StatusCodes.OK).json({ product });
}

module.exports = updateProduct;