const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please, provide name'],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    require: [true, 'Please, provide an email'],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Please, provide a valid email'
    },
  },
  password: {
    type: String,
    require: [true, 'Please, provide a password'],
    maxlength: 30,
    minlength: 8
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
  }
});

module.exports = mongoose.model('User', UserSchema);