const { StatusCodes } = require('http-status-codes');

async function updateReview(req, res){
  return res.status(StatusCodes.OK).send('update review route');
}

module.exports = updateReview;