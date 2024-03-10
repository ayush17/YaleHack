const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const config = require("./config/config");
const uri = config.mongodb_uri;
const app = express();

const roomRoute = require("./routes/roomsRoute.js");

app.use(cors());
app.use(express.json());

app.use("/api/rooms", roomRoute);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});

async function run() {
  try {
    const uri = process.env.MONGODB_URI || config.mongodb_uri; // Use Railway shared variable if available, else fallback to local config
    const sharedVariable=`${{ shared.mongodb_uri }}`
    console.log();
    mongoose.connect(sharedVariable).then(() => {
      console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
      );
    });
  } catch {
    await mongoose.connection.close();
  }
}
run().catch(console.dir);
