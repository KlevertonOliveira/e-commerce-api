const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../../errors');
const { checkPermission } = require('../../utils');
const Review = require('../../models/Review');

async function updateReview(req, res){
  const {
    params: { id: reviewId }, 
    body: { title, rating, comment },
    user
  } = req;

  const review = await Review.findById(reviewId);

  if(!review){
    throw new NotFoundError(`No review found with id ${reviewId}`);
  }

  checkPermission(user, review.user);

  review.title = title;
  review.rating = rating;
  review.comment = comment;

  await review.save();

  return res.status(StatusCodes.OK).json({ review });
}

module.exports = updateReview;