import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

//User translates to users in Mongo db, means it becomes plurat and lowercase.
const User = mongoose.model("User", userSchema);

export default User;
