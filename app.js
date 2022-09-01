const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const { getHashes, newHash } = require("./controllers/hash20Controllers");
app.use(express.json({ limit: "10kb" }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' https://cdnjs.cloudflare.com"
  );
  next();
});

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Connecting Database
mongoose
  .connect(
    "mongodb+srv://hash2o:hash2o@hash2o-instance.upnuf.mongodb.net/?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
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
