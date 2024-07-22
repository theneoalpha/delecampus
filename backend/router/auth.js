const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../model/userSchema");
const JWT_SECRET = "HELLOTHISISVIKASHKAUSHIKIAMAGOODBOY"; 

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Register Route
router.post("/register", async (req, res) => {
  const { name, email, skill, ig_username, linkdin, twitter, github, password, cpassword } = req.body;

  if (!name || !email || !skill || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill in all the fields" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(420).json({ error: "Email already exists" });
    } else if (password !== cpassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({ name, skill, email, ig_username, linkdin, twitter, github, password: hashedPassword });

    const saveMethod = await user.save();
    if (saveMethod) {
      // Generate token
      const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '1h' });
      return res.status(201).json({ message: "User registered successfully", token: token });
    } else {
      return res.status(500).json({ message: "Failed to register token one" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to register from catch block" });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: "Please fill in all the fields" });
  }

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate token
    const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    return res.status(200).json({ message: "Login successful", token: token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Login failed" });
  }
});

module.exports = router;
