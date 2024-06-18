const express = require('express');
const registerRouter = express.Router();
const User = require('../model/userSchema');
const bcrypt = require('bcryptjs');

registerRouter.post('/register', async (req, res) => {
  const { name, email, skill, ig_username, linkedin, batch, github, password, cpassword } = req.body;

  if (!name || !email || !skill || !batch || !password || !cpassword) {
    return res.status(422).json({ error: 'Please fill all required fields' });
  }

  if (password !== cpassword) {
    return res.status(422).json({ error: 'Passwords do not match' });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({ 
      name, 
      email, 
      skill, 
      ig_username, 
      linkedin, 
      batch, 
      github, 
      password: hashedPassword 
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to register' });
  }
});

module.exports = registerRouter;
