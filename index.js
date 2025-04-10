//switching to personal laptop for web development projects
//to begin with we got the boilerplate minimum express code from their website.
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db-mongo.js";

import cookieParser from "cookie-parser";

//import all routes
import userRoutes from "./routes/userRoutes.js";
const app = express();
const port = 3000;

dotenv.config();

//console.log(process.env.PORT);
//opening a new tab still works in localhost. In Localhost does not work great
app.use(
  cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("WebDev Cohort Full Stack Project!");
  console.log("WebDev Cohort");
  //console.log(req.body);
});

app.get("/hitesh", (req, res) => {
  res.send("Hitesh!");
});

//user routes
app.use("/api/v1/users", userRoutes);

//connect to db
console.log("MONGO_URL:", process.env.MONGO_URL);
db();

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
