const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../../errors');
const { checkPermission } = require('../../utils');
const Review = require('../../models/Review');

async function deleteReview(req, res){
  const { id: reviewId } = req.params;

  const review = await Review.findById(reviewId);

  if(!review){
    throw new NotFoundError(`No review found with id ${reviewId}`);
  }

  checkPermission(req.user, review.user);

  await review.remove();

  return res.status(StatusCodes.OK).json({ message: 'Success! Review removed!'});
}

module.exports = deleteReview;