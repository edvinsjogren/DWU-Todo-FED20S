const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const todoRouter = require("./routes/todoRoute");
require("dotenv").config();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use("/", todoRouter);

mongoose.connect(
  process.env.DATABASE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) return;
    app.listen(process.env.PORT || 6000, () => {
      console.log("Application Online");
    });
  }
);
