const { BadRequestError } = require('../../errors');
const { StatusCodes } = require('http-status-codes');
const path = require('path');

async function uploadProductImage(req, res){
  if(!req.files) throw new BadRequestError('No file uploaded');

  const productImage = req.files.image;

  if(!productImage.mimetype.startsWith('image')){
    throw new BadRequestError('Please, upload image.');
  } 
  
  const maxSize = 1024 * 1024; // 1MB
  
  if(!productImage.size > maxSize){
    throw new BadRequestError('Please, upload image smaller than 1MB.');
  } 

  const imagePath = path.join(__dirname, `../../public/uploads/${productImage.name}`);
  await productImage.mv(imagePath);

  return res.status(StatusCodes.OK).json({ image: `/uploads/${productImage.name}`})
}

module.exports = uploadProductImage;