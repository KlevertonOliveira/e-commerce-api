const express = require('express');
const router = express.Router();

const authenticateUser = require('../middleware/authentication');
const authorizePermission = require('../middleware/authorizePermission');

const {
  createOrder,
  getAllOrders,
  getCurrentUserOrders,
  getSingleOrder,
  updateOrder
} = require('../controllers/order');

router.route('/')
.get(authenticateUser, authorizePermission('admin'), getAllOrders)
.post(authenticateUser, createOrder);

router.route('/showAllMyOrders')
.get(authenticateUser, getCurrentUserOrders);

router.route('/:id')
.get(authenticateUser, getSingleOrder)
.patch(authenticateUser, updateOrder)

module.exports = router;