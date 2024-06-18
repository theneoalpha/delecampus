const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  skill: { type: String, required: true },
  ig_username: { type: String },
  linkdin: { type: String },
  twitter: { type: String },
  github: { type: String },
  password: { type: String, required: true },
  cpassword:{
    type:String,
    required:true
},
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id }, process.env.SECRET_KEY, { expiresIn: '30d' });
};

const User = mongoose.model('USER', userSchema);
module.exports = User;
