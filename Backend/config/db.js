const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // In a real app, this connects to process.env.MONGO_URI
        // For prototype demonstration, we log the attempt
        console.log('Attempting to connect to MongoDB Atlas...');
        
        // await mongoose.connect(process.env.MONGO_URI);
        
        console.log('MongoDB Connected Successfully (Mock Mode)');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;