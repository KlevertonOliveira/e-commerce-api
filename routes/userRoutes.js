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
router.route('/showMe').get(showCurrentUser);
router.route('/updateUser').patch(updateUser);
router.route('/updateUserPassword').patch(updateUserPassword);
router.route('/:id').get(authenticateUser, getSingleUser);

module.exports = router;