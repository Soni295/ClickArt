const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "/../../public/images"),

  filename: (req, file, cb) => {
    const nombreUnico = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, nombreUnico + path.extname(file.originalname));
  },
});

const subida = multer({
  storage,
  dest: path.join(__dirname, "/../../public/images"),

  limits: { fileSize: 10000000 }, //10mb maximo de tamaño

  fileFilter: (req, file, callback) => {
    const filetypes = /jpeg|png|jpg/; //aca nombro los archivos permitido
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname));
    if (mimetype || extname) {
      return callback(null, true);
    }
    callback("Archivo no validao");
  },
}).single("dibujo");

module.exports = { subida };