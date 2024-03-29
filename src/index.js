const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const config = require("./config/config");
const uri = config.mongodb_uri;
const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const roomRoute = require("./routes/roomsRoute.js");
const userRoute = require("./routes/userRoutes.js");

app.use(cors());

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/rooms", roomRoute);
app.use("/api/users", userRoute);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});

async function run() {
  try {
    const uri = process.env.MONGODB_URI || config.mongodb_uri; // Use Railway shared variable if available, else fallback to local config
    mongoose.connect(uri).then(() => {
      console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
      );
    });
  } catch {
    await mongoose.connection.close();
  }
}
run().catch(console.dir);
