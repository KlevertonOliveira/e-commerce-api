const { StatusCodes } = require('http-status-codes');

async function createReview(req, res){
  return res.status(StatusCodes.CREATED).send('Create review route');
}

module.exports = createReview;