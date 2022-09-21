const { StatusCodes } = require('http-status-codes');

async function getAllProducts(req, res){
  return res.status(StatusCodes.OK).send('Get all products route')
}

module.exports = getAllProducts;