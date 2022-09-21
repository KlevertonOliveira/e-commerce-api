const express = require('express');
const router = express.Router();

const authenticateUser = require('../middleware/authentication');
const authorizePermission = require('../middleware/authorizePermission');

const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  updloadProductImage
} = require('../controllers/product');

router.route('/')
.get(getAllProducts)
.post([authenticateUser, authorizePermission('admin')], createProduct);

router.route('/uploadImage')
.post([authenticateUser, authorizePermission('admin')], updloadProductImage);

router.route('/:id')
.get(getSingleProduct)
.patch([authenticateUser, authorizePermission('admin')], updateProduct)
.delete([authenticateUser, authorizePermission('admin')], deleteProduct);

module.exports = router;