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

   
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({ name, skill, email, ig_username, linkdin, twitter, github, password: hashedPassword });

    const saveMethod = await user.save();
    if (saveMethod) {
      
      const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '1h' });
      return res.status(201).json({ message: "User registered successfully", token: token });
    } else {
      return res.status(500).json({ message: "Failed to register" });
    }
  } catch (err) {
    console.error('Error during registration:', err);  
    res.status(500).json({ message: "Failed to register from catch block", error: err.message });
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
    console.error('Error during login:', err); 
    res.status(500).json({ message: "Login failed", error: err.message });
  }
});




// Middleware to authenticate using JWT
const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ message: "No token provided" });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(500).json({ message: "Failed to authenticate token" });
    req.userId = decoded._id;
    next();
  });
};

// Profile Route
router.get("/profile", authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch user profile", error: err.message });
  }
});

router.put("/profile", authenticate, async (req, res) => {
  const { name, skill, ig_username, linkdin, twitter, github } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      req.userId,
      { name, skill, ig_username, linkdin, twitter, github },
      { new: true }
    ).select('-password');
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "Profile updated successfully", user });
  } catch (err) {
    res.status(500).json({ message: "Failed to update profile", error: err.message });
  }
});




module.exports = router;
