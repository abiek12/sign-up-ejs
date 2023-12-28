var express = require("express");
var router = express.Router();
const { MongoClient, ServerApiVersion } = require("mongodb");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Sign up" });
});

const uri = "mongodb://localhost:27017";
const dbName = "Registration";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
router.post("/submit", (req, res) => {
  async function run() {
    try {
      // Connect the client to the server (optional starting in v4.7)
      await client.connect();
      
      // Send a ping to confirm a successful connection
      await client.db(dbName).collection("users").insertOne(req.body);
      console.log("successfully connected to MongoDB!");
      res.render("user", { userName: req.body.userName });
    } catch {
      res.send("An Error Occured");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);
});

module.exports = router;
