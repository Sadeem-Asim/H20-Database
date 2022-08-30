const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { getHashes, newHash } = require("./controllers/hash20Controllers");
app.use(express.json({ limit: "10kb" }));

// Connecting Database
mongoose
  .connect("mongodb://localhost:27017/hash-20", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB Connection Successful");
  });

// Routers
app.post("/createHash", newHash);
app.get("/hashes", getHashes);
app.get("/", (req, res) => {
  res.send("Get Hashes On /hashes");
});
// App Server
app.listen("3000", () => {
  console.log("app is running on server ");
});
