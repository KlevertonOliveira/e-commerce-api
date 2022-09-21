const { StatusCodes } = require('http-status-codes');

async function deleteProduct(req, res){
  return res.status(StatusCodes.OK).send('delete product route')
}

module.exports = deleteProduct;