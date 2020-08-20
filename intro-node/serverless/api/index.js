const { response } = require("express");

const express = require("express");
const app = express();

app.get("*", (request, response) => {
  response.send({ messange: "Chanchito Feliz" });
});

app.listen(3000, () => console.log("Nuestro servidor esta escuchando"));
