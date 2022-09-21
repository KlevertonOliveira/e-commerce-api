const { StatusCodes } = require('http-status-codes');

async function createProduct(req, res){
  return res.status(StatusCodes.CREATED).send('Create product route')
}

module.exports = createProduct;