const { response } = require("express");

const express = requiere("express");
const app = express();

app.get("*", (request, response) => {
  response.send({ messange: "Chanchito Feliz" });
});
