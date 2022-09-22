const { StatusCodes } = require('http-status-codes');

async function getAllReviews(req, res){
  return res.status(StatusCodes.OK).send('get all reviews route');
}

module.exports = getAllReviews;