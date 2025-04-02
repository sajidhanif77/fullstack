import mongoose from "mongoose";
import dotenv from "dotenv";
import mysql from "mysql2";
dotenv.config();

const dbConfig = {
  host: process.env.DB_HOSTNAME,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};
let db;
const connectToDB = async () => {
  const pool = mysql.createPool(dbConfig);
  const poolPromise = pool.promise();

  return poolPromise;
};
const main = async () => {
  db = await connectToDB();
  console.log("Connected to database");
};
main();

export default connectToDB;
