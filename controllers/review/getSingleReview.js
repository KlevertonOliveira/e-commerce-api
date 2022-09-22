const { StatusCodes } = require('http-status-codes');

async function getSingleReview(req, res){
  return res.status(StatusCodes.OK).send('get single review route');
}

module.exports = getSingleReview;