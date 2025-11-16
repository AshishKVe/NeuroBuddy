const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load Config
dotenv.config();

// Initialize App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database (Placeholder for now)
// connectDB(); 


app.get('/', (req, res) => {
    res.send('Neuro Buddy API is running...');
});

// Define Routes (Placeholder)
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/chat', require('./routes/chatRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));