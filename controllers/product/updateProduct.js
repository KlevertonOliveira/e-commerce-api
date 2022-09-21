const { StatusCodes } = require('http-status-codes');

async function updateProduct(req, res){
  return res.status(StatusCodes.OK).send('update product route')
}

module.exports = updateProduct;