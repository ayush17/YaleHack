require("dotenv").config();
module.exports = {
  port: process.env.PORT || 3000,
  mongodb_uri: process.env.MONGODB_URI || "mongodb://0.0.0.0/mydb",
  // Add other configuration options here
};
