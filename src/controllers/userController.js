const userService = require("../services/userService");

exports.getUserById = async (req, res) => {
  try {
    const emailId = req.body.email;
    const password = req.body.password;
    const user = await userService.getUserById(emailId);
    console.log(user);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    } else if (password !== user[0].password) {
      return res.status(404).json({ error: "Password is wrong" });
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
