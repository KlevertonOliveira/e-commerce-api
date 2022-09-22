const { StatusCodes } = require('http-status-codes');

async function deleteReview(req, res){
  return res.status(StatusCodes.OK).send('Delete review route');
}

module.exports = deleteReview;