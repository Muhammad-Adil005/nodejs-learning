// console.log("DB Connection Code goes here");

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(''); // Your Connection String Goes Here
    console.log("Mongo DB Connected Successfully")
    }
    catch (err) {
        console.log("Mongo DB Connection Error: ", err);
    }
}

module.exports = connectDB;