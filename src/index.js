const express = require("express");
const cors = require("cors");
const config = require("./config/config");
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = config.mongodb_uri;
const app = express();
// Middleware
app.use(cors());
app.use(express.json());

// // Define your routes here
// const exampleRoutes = require("./routes/exampleRoutes");
// app.use("/api/example", exampleRoutes);

// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
