const { StatusCodes } = require('http-status-codes');
const Review = require('../../models/Review');

async function getSingleProductReviews(req, res){
  const { id: productId } = req.params;

  const reviews = await Review.find({ product: productId});

  return res.status(StatusCodes.OK).json({
    count: reviews.length,
    reviews
  })
}

module.exports = getSingleProductReviews;