const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    skill: {
        type: String,
        required: true,
    },
    ig_username: {
        type: String,
        required: false,
    },
    linkedin: {
        type: String,
        required: false,
    },
    batch: {
        type: Number,
        required: true,
    },
    github: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
    }
});

userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
