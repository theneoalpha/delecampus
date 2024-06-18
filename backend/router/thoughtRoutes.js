const express = require('express');
const thoughtRouter = express.Router();
const Thought = require('../model/thoughtSchema');

thoughtRouter.post('/thought', async (req, res) => {
  try {
    const { content } = req.body;
    const newThought = new Thought({ content });
    await newThought.save();
    res.status(201).json({ message: 'Thought shared successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to share thought', error });
  }
});

thoughtRouter.get('/thoughts', async (req, res) => {
  try {
      const thoughts = await Thought.find({});
      res.json(thoughts); // Ensure the response is JSON
  } catch (error) {
      res.status(500).json({ error: 'Failed to fetch thoughts' });
  }
});

module.exports = thoughtRouter;
