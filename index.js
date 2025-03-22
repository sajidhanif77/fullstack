//to begin with we got the boilerplate minimum express code from their website.
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js";

import cookieParser from "cookie-parser";

const app = express();
const port = 3000;

dotenv.config();
//opening a new tab still works in localhost. In Localhost does not work great
app.use(
  cors({
    origin: process.env.BASE_URL,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("WebDev Cohort Full Stack Project!"); // Corrected this line
});

//connect to db
db();
console.log(process.env.PORT);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
