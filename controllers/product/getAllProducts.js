const { StatusCodes } = require('http-status-codes');
const Product = require('../../models/Product');

async function getAllProducts(req, res){
  const products = await Product.find({});

  return res.status(StatusCodes.OK).json({ 
    nbHits: products.length, 
    products 
  })
}

module.exports = getAllProducts;