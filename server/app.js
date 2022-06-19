const express = require("express");
var api = require("./api");
require("dotenv").config();

const app = express();

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", process.env.CLIENT_URL);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});

app.use("/api", api);

app.get("/", (req, res) => {
  res.send("/api");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
