
import mongoose from 'mongoose';
import express from "express";
import dotenv from "dotenv";
const PORT = process.env.PORT || 4000;
dotenv.config();


const app = express();

// MongoDB connection
const mongoURI = "mongodb+srv://bluebuy:4WtsdkMtD9kDhLA0@cluster0.kro1gxc.mongodb.net/bluebuy_scrapping?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});