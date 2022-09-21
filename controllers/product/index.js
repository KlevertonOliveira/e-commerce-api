const createProduct = require('./createProduct');
const getAllProducts = require('./getAllProducts');
const getSingleProduct = require('./getSingleProduct');
const updateProduct = require('./updateProduct');
const deleteProduct = require('./deleteProduct');
const updloadProductImage = require('./uploadProductImage');

module.exports =  {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  updloadProductImage
}