const Product = require('../../models/Product');
const Review = require('../../models/Review');

const { StatusCodes } = require('http-status-codes');
const { NotFoundError, BadRequestError } = require('../../errors');

async function createReview(req, res){
  const { product: productId } = req.body;
  const { id: userId } = req.user;

  const isValidProduct = await Product.findById(productId);

  if(!isValidProduct) {
    throw new NotFoundError(`No product found with id ${productId}`); 
  }

  const isReviewAlreadySubmitted = await Review.findOne({
    product: productId, 
    user: userId
  })

  if(isReviewAlreadySubmitted){
    throw new BadRequestError('Already submitted review for this product')
  }

  req.body.user = userId;
  const review = await Review.create(req.body);

  return res.status(StatusCodes.CREATED).json({ review });
}

module.exports = createReview;