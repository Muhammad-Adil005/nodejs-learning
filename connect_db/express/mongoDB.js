const express = require('express');
const connectDB = require('./db_connection');

const app = express();

connectDB();

const user = require('../models/userModel');

const addUser = async () => {
    const result = await user.create({
        name: "Adil",
        email: "adil@gmail.com"
    });

    console.log(result);
};

addUser();

app.listen(2000, () => {
    console.log("Server is running on Port no 2000")
})