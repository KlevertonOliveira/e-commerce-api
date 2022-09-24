const { StatusCodes } = require('http-status-codes');

async function getSingleOrder(req, res){
  return res.status(StatusCodes.OK).json({
    message: 'Get Single Order Route'
  })
};

module.exports = getSingleOrder;