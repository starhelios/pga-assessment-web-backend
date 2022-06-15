const cors = require("cors");
var cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
var path = require("path");
require("dotenv").config();

var app = express();

app.set("views", path.join(__dirname, "views"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Connect DB
const dbUrl = require("./src/dbconfig");
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

// Routes
const apiRouter = require("./src/routes");
app.use("/api", apiRouter);

app.listen(process.env.PORT || 1337, function () {
  console.log(
    "Server running at http://localhost:%d",
    process.env.PORT || 1337
  );
});
