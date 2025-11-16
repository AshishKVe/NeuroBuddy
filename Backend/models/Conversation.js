const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true,
        enum: ['user', 'model'] // Google Gemini roles
    },
    content: {
        type: String,
        required: true
    },
    sentiment_score: {
        type: Number, // Stores sentiment analysis result (-1 to 1)
        default: 0
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const ConversationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    session_summary: {
        type: String
    },
    messages: [MessageSchema],
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Conversation', ConversationSchema);