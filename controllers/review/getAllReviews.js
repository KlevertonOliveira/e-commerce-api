const { StatusCodes } = require('http-status-codes');
const Review = require('../../models/Review');

async function getAllReviews(req, res){
  const reviews = await Review.find({}).populate({
    path: 'product',
    select: 'name company'
  });
  
  return res.status(StatusCodes.OK).json({
    count: reviews.length, 
    reviews 
  });
}

module.exports = getAllReviews;