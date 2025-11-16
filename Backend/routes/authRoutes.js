const express = require('express');
const router = express.Router();

// @route   POST api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', (req, res) => {
    // Placeholder logic for prototype
    res.status(201).json({ 
        message: "User registered successfully", 
        token: "mock_jwt_token_example_12345" 
    });
});

// @route   POST api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', (req, res) => {
    res.status(200).json({ 
        message: "Login successful", 
        user: { id: "user_123", username: "demo_user" },
        token: "mock_jwt_token_example_12345" 
    });
});

module.exports = router;