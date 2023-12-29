// db.js
const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/vatsal";


const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);

        console.log('Connected to Mongo database successfully');
        
        // Your application logic can go here

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectToMongo;
