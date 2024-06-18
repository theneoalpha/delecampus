const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../model/userSchema");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Register Route
router.post("/register", async (req, res) => {
  const { name, email, skill, ig_username, linkdin, twitter, github, password, cpassword } = req.body;

  if (!name || !email || !skill  || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill in all the fields" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(420).json({ error: "Email already exists" });
    } else if (password !== cpassword) {
      return res.status(400).json({ error: "Password Not Matched" });
    }

    const user = new User({ name, skill, email, ig_username, linkdin, twitter, github, password, cpassword });

    const saveMethod = await user.save();
    if (saveMethod) {
      return res.status(201).json({ message: "User registered successfully" });
    } else {
      return res.status(500).json({ message: "Failed to register" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to register" });
  }
});

// Contact Route
router.post("/contact", async (req, res) => {
  const { name, email, phone, text } = req.body;

  if (!name || !email || !phone || !text) {
    return res.status(422).json({ error: "Please fill in all the fields" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(420).json({ error: "Email already exists" });
    }

    const user = new User({ name, email, phone, text });

    const saveMethod = await user.save();
    if (saveMethod) {
      return res.redirect("/thankyou");
    } else {
      return res.status(500).json({ message: "Failed to submit contact form" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to submit contact form" });
  }
});

module.exports = router;
