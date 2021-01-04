//modulos
const express = require("express"); //Llamo a express
const app = express(); //Activo la app
const http = require("http");
const socketio = require("socket.io");
const server = http.createServer(app); //Monto el server
const io = socketio(server);
const enrutador = require("./rutas/rutas"); //enlases
const { subida } = require("./multer/multer"); //subir imagenes
const { sesion } = require("./sesiones/session"); //para conectarser
const path = require("path");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const bodyParser = require('body-parser');
require("./socketio/io")(io);

app.use(fileUpload());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    allowedHeaders: ["Content-Type"],
  })
);

app.use(bodyParser.urlencoded({ extended: false} ));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "/../public")));
app.use(sesion);

//rutas
app.use("", enrutador);

//server
server.listen(8888, () => {
  console.log("Corriendo en el puerto 8888");
});