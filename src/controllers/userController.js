const userService = require("../services/userService");

exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error: ${error}` });
  }
};

exports.createUser = async (req, res) => {
  try {
    // Access parsed JSON data directly from req.body
    const newUser = await userService.createUser(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error: ${error}` });
  }
};
