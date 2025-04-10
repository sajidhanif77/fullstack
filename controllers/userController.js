import User from "../models/userModel.js";
const registerUser = async (req, res) => {
  // get data like email, password
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
    console.log(email);
    res.send("registered");
  }
  try {
    const existingUser = User.findOne({ email });
    if (existingUser) {
      return res.status(400);
    }
  } catch (error) {}
  // validate
  // check if user already exists
  // if non-existant create a user in database
  // create a verification token
  // save token in database
  // send token by email to user
  // send success status to user
};

export { registerUser };
