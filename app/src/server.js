//modulos
const express = require("express"); //Llamo a express
const app = express(); //Activo la app
const { sesion } = require("./sesiones/session"); //para conectarser
const path = require("path");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const bodyParser = require('body-parser');

app.use(fileUpload());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    allowedHeaders: ["Content-Type"],
  })
);

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "/../public")));
app.use(sesion);

//rutas
app.use(require("./router/router"))

//server
app.listen(8888, () => {
  console.log("Corriendo en el puerto 8888");
})
