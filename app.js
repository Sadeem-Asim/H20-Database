const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { getHashes, newHash } = require("./controllers/hash20Controllers");
app.use(express.json({ limit: "10kb" }));

// Connecting Database
mongoose
  .connect(
    "mongodb+srv://hash2o:hash2o@hash2o-instance.upnuf.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
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
