const express = require('express');
const router = express.Router();

// @route   POST api/chat/analyze
// @desc    Send message to Gemini API
// @access  Private
router.post('/analyze', (req, res) => {
    res.status(200).json({ message: "Gemini API integration pending..." });
});

// @route   GET api/chat/history
// @desc    Get user conversation history
// @access  Private
router.get('/history', (req, res) => {
    res.status(200).json({ message: "Fetch history endpoint" });
});

module.exports = router;