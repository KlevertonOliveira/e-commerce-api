const express = require('express');
const router = express.Router();

const authenticateUser = require('../middleware/authentication');
const authorizePermission = require('../middleware/authorizePermission');

const { 
  getAllUsers,
  getSingleUser, 
  showCurrentUser, 
  updateUser, 
  updateUserPassword 
} = require('../controllers/user');

router.route('/').get(authenticateUser, authorizePermission('admin'), getAllUsers);
router.route('/showMe').get(authenticateUser, showCurrentUser);
router.route('/updateUser').patch(authenticateUser, updateUser);
router.route('/updateUserPassword').patch(authenticateUser, updateUserPassword);
router.route('/:id').get(authenticateUser, getSingleUser);

module.exports = router;