const { StatusCodes } = require('http-status-codes');

async function uploadProductImage(req, res){
  return res.status(StatusCodes.OK).send('upload product image route')
}

module.exports = uploadProductImage;