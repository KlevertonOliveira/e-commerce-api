const { StatusCodes } = require('http-status-codes');

async function getCurrentUserOrders(req, res){
  return res.status(StatusCodes.OK).json({
    message: 'Get Current User Orders Route'
  })
};

module.exports = getCurrentUserOrders;