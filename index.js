
import mongoose from 'mongoose';
import express from "express";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js"
import userRoute from "./route/userRoute.js"
import cors from "cors"

const PORT = process.env.PORT || 4000;
dotenv.config();

const app = express();
app.use(cors())
app.use(express.json());


// MongoDB connection
const mongoURI = "mongodb://127.0.0.1:27017/bookstore";  // Use 127.0.0.1 instead of localhost


mongoose   
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });



// definding routes
app.use("/book", bookRoute)
app.use("/user", userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
