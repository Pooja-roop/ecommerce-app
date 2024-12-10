const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Log the MongoDB URI for debugging
console.log(`MongoDB URI: ${process.env.MONGODB_URI}`);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ecommerce')
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit process with failure
    });

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});