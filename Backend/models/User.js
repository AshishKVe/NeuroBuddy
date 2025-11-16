const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password_hash: {
        type: String,
        required: true
    },
    preferences: {
        daily_checkin: {
            type: Boolean,
            default: false
        },
        theme: {
            type: String,
            enum: ['light', 'dark'],
            default: 'dark'
        }
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);