//we must import express to create routes
import express from "express";
import { registerUser } from "../controllers/userController.js";

const router = express.Router();
//router.get router.post etc.
router.post("/register", registerUser);
export default router;
