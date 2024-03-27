const User = require("../models/user");

exports.getUserById = async (email) => {
  try {
    const user = await User.find({ email });
    return user;
  } catch (error) {
    throw new Error(`Error retrieving user by ID: ${error}`);
  }
};

//new user
exports.createUser = async (user) => {
  try {
    const newUser = new User(user);
    return await newUser.save();
  } catch (error) {
    throw new Error(`Error creating user: ${error}`);
  }
};
