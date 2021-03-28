const { response } = require("express");

const express = require("express"); // llamar la dependencia que instalamos
const app = express(); // ejecutamos express

app.get("*", (request, response) => {
  // get *  -> va a recibir todas la peticiones
  response.send({ messange: "Chanchito Feliz" }); // response send -> para mandar
});

app.listen(3000, () => console.log("Nuestro servidor esta escuchando")); // iniciar en el puerto 3000
