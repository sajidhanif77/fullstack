//Mongoose helps us in writinga a Model so the first line goes like this
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
  },
  {
    timestamp: true,
  }
);

//User translates to users in Mongo db, means it becomes plurat and lowercase.
const User = mongoose.model("User", userSchema);

export default User;
