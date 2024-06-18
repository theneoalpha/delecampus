const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400, // Thought will expire and be deleted automatically after 24 hours
  },
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
