const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../../errors');
const Review = require('../../models/Review');

async function getSingleReview(req, res){
  const { id: reviewId } = req.params;

  const review = await Review.findById(reviewId);

  if(!review){
    throw new NotFoundError(`No review found with id ${reviewId}`);
  }

  return res.status(StatusCodes.OK).json({ review });
}

module.exports = getSingleReview;