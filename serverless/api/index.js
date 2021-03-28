const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Users.create({ name: "chanchito feliz" });

app.get("*", (req, res) => {
  Users.find().then((x) => res.send(x));
});

module.exports = app;
