'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  passwordHash: {
    type: String
  },
  campus: {
    type: String,
    enum: ['Lisbon', 'Miami', 'Amsterdam', 'Madrid']
  },
  photo: [
    {
      type: String
    }
  ]
});

module.exports = mongoose.model('User', schema);
