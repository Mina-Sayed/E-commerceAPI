const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const connectDB = async () => {
    try {
         await mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        
        });
    
        console.log(`MongoDB Connected: }`);
    } catch (err) {
        console.error(err);
    }
};
    
module.exports = connectDB;