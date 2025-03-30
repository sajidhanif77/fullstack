//we must import express to create routes
import express from "express";
import { registerUser } from "../controller/user.controller.js";

const router = express.Router();
//router.get router.post etc.
router.get("/register", registerUser);
export default router;
