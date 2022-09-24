const { StatusCodes } = require('http-status-codes');

async function updateOrder(req, res){
  return res.status(StatusCodes.OK).json({
    message: 'Update Order Route'
  })
};

module.exports = updateOrder;