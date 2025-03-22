import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("connected to Mongo DB");
    })
    .catch((err) => {
      console.log("Error connecting to Mongo DB");
    });
};

export default db;
