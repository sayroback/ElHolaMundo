const express = require("express");
const app = express();

app.get("*", (req, res) => {
  console.log("Mi primer app express");
  res.send({ mensaje: "Chanchito feliz" });
});

module.exports = app;
