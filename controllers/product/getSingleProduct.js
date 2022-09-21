const { StatusCodes } = require('http-status-codes');

async function getSingleProduct(req, res){
  return res.status(StatusCodes.OK).send('get single product route')
}

module.exports = getSingleProduct;