const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  skill: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  ig_username: {
    type: String,
    required: false
  },
  linkdin: {
    type: String,
    required: false
  },
  twitter: {
    type: String,
    required: false
  },
  github: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
