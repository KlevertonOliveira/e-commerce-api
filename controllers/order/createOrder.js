const { StatusCodes } = require('http-status-codes');

async function createOrder(req, res){
  return res.status(StatusCodes.CREATED).json({
    message: 'Create Order Route'
  })
};

module.exports = createOrder;