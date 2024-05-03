import express from "express";
import mongoose from "mongoose";
import db from "./config/database.config"
const brand = require('./routes/brand');

const app = express();
app.use(express.json());

mongoose.connect(db.url)
    .then(() => {
        console.log("Successfully connected to the database  ");
    })
    .catch(err => {
        console.log('Could not is connect to the database. Exiting now...', err);
        process.exit();
    });
    
    
app.use('/api', brand);

const PORT = process.env.PORT || 9001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});