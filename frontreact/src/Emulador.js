let lista = [
  { usuario: "Armando", contrasena: "123456789" },
  { usuario: "Ejemplo12", contrasena: "123456789" },
  { usuario: "Ejemplo15", contrasena: "123456789" },
  { usuario: "Ricardo", contrasena: "123456789" },
  { usuario: "Sion14", contrasena: "123456789" },
];

let datosDePerfil = [
  {
    Usu_Nombre: "Armando",
    Nombre_Completo: "Armando Esteban quito",
    Usu_Email: "ArmandoE@hotmail.com",
    Usu_tipo: 1,
    Especialidad: "ingeniero",
    Idiomas: "aleman",
    Pais: "alemania",
    ID_Dibujo: 1,
    Nombre_del_archivo: "icon.png",
  },
  {
    Usu_Nombre: "Ejemplo12",
    Nombre_Completo: "Noa",
    Usu_Email: "Ejemplo@hotmail.com",
    Usu_tipo: 0,
    Especialidad: "Artista conceptual",
    Idiomas: "Chino",
    Pais: "China",
    ID_Dibujo: 1,
    Nombre_del_archivo: "icon.png",
  },
  {
    Usu_Nombre: "Ejemplo15",
    Nombre_Completo: "Juan Esteban",
    Usu_Email: "Juama@hotmail.com",
    Usu_tipo: 0,
    Especialidad: "",
    Idiomas: "",
    Pais: "",
    ID_Dibujo: 1,
    Nombre_del_archivo: "icon.png",
  },
  {
    Usu_Nombre: "Ricardo",
    Nombre_Completo: "Ricardo Martin de la Cruz",
    Usu_Email: "RicAlmagro@hotmail.com",
    Usu_tipo: 0,
    Especialidad: "Diseñado de ambiente",
    Idiomas: "Español",
    Pais: "Mexico",
    ID_Dibujo: 1,
    Nombre_del_archivo: "icon.png",
  },
  {
    Usu_Nombre: "Sion14",
    Nombre_Completo: "Sion",
    Usu_Email: "Sionsion@hotmail.com",
    Usu_tipo: 1,
    Especialidad: "",
    Idiomas: "",
    Pais: "",
    ID_Dibujo: 1,
    Nombre_del_archivo: "icon.png",
  },
];

const galerias = [
  {
    ID_Dibujo: 1,
    Titulo: "Mi dibujo",
    Nombre_del_archivo: "icon.png",
    Usu_Nombre: "Sion14",
  },
  {
    ID_Dibujo: 2,
    Titulo: "Hola",
    Nombre_del_archivo: "1593099470556-973547172.png",
    Usu_Nombre: "Armando",
  },
  {
    ID_Dibujo: 24,
    Titulo: "The escape",
    Nombre_del_archivo: "1593098256659-869617069.png",
    Usu_Nombre: "Armando",
  },
  {
    ID_Dibujo: 25,
    Titulo: "Umbreon",
    Nombre_del_archivo: "1593098319011-2436798.png",
    Usu_Nombre: "Ejemplo12",
  },
  {
    ID_Dibujo: 26,
    Titulo: "Sketch",
    Nombre_del_archivo: "1593098372167-289280102.jpg",
    Usu_Nombre: "Armando",
  },
  {
    ID_Dibujo: 27,
    Titulo: "El ritual",
    Nombre_del_archivo: "1593098427414-295237574.png",
    Usu_Nombre: "Sion14",
  },
  {
    ID_Dibujo: 28,
    Titulo: "Visiones",
    Nombre_del_archivo: "1593098684450-861678336.jpg",
    Usu_Nombre: "Ejemplo15",
  },
  {
    ID_Dibujo: 29,
    Titulo: "Fox",
    Nombre_del_archivo: "1593099378623-624496413.jpg",
    Usu_Nombre: "Ejemplo15",
  },
  {
    ID_Dibujo: 30,
    Titulo: "...",
    Nombre_del_archivo: "1593099423388-361583635.png",
    Usu_Nombre: "Sion14",
  },
  {
    ID_Dibujo: 31,
    Titulo: "...",
    Nombre_del_archivo: "1593099441003-628126394.png",
    Usu_Nombre: "Ricardo",
  },
  {
    ID_Dibujo: 33,
    Titulo: "Relax Time",
    Nombre_del_archivo: "1593099642181-594739549.png",
    Usu_Nombre: "Armando",
  },
  {
    ID_Dibujo: 34,
    Titulo: "Relax Time",
    Nombre_del_archivo: "1593099765495-910883431.png",
    Usu_Nombre: "Ejemplo12",
  },
  {
    ID_Dibujo: 35,
    Titulo: "The Escape",
    Nombre_del_archivo: "1593099797260-195580306.png",
    Usu_Nombre: "Ejemplo12",
  },
];

let dibujosIndex = [
  {
    ID_Dibujo: 35,
    Titulo: "The Escape",
    Nombre_del_archivo: "1593099797260-195580306.png",
  },
  {
    ID_Dibujo: 34,
    Titulo: "Relax Time",
    Nombre_del_archivo: "1593099765495-910883431.png",
  },
  {
    ID_Dibujo: 33,
    Titulo: "Relax Time",
    Nombre_del_archivo: "1593099642181-594739549.png",
  },
  {
    ID_Dibujo: 31,
    Titulo: "...",
    Nombre_del_archivo: "1593099441003-628126394.png",
  },
  {
    ID_Dibujo: 30,
    Titulo: "...",
    Nombre_del_archivo: "1593099423388-361583635.png",
  },
  {
    ID_Dibujo: 29,
    Titulo: "Fox",
    Nombre_del_archivo: "1593099378623-624496413.jpg",
  },
  {
    ID_Dibujo: 28,
    Titulo: "Visiones",
    Nombre_del_archivo: "1593098684450-861678336.jpg",
  },
  {
    ID_Dibujo: 27,
    Titulo: "El ritual",
    Nombre_del_archivo: "1593098427414-295237574.png",
  },
  {
    ID_Dibujo: 26,
    Titulo: "Sketch",
    Nombre_del_archivo: "1593098372167-289280102.jpg",
  },
  {
    ID_Dibujo: 25,
    Titulo: "Umbreon",
    Nombre_del_archivo: "1593098319011-2436798.png",
  },
  {
    ID_Dibujo: 24,
    Titulo: "The escape",
    Nombre_del_archivo: "1593098256659-869617069.png",
  },
  {
    ID_Dibujo: 2,
    Titulo: "Hola",
    Nombre_del_archivo: "1593099470556-973547172.png",
  },
  {
    ID_Dibujo: 1,
    Titulo: "Mi dibujo",
    Nombre_del_archivo: "icon.png",
  },
];

const todosLosDibujos = [
  {
    ID_Dibujo: 1,
    Titulo: "Mi dibujo",
    Nombre_del_archivo: "icon.png",
    Descripcion: "fdklasdjfñlasdjfalksdjfañ",
    Usu_Nombre: "Sion14",
  },
  {
    ID_Dibujo: 2,
    Titulo: "Hola",
    Nombre_del_archivo: "1593099470556-973547172.png",
    Descripcion: "",
    Usu_Nombre: "Armando",
  },
  {
    ID_Dibujo: 24,
    Titulo: "The escape",
    Nombre_del_archivo: "1593098256659-869617069.png",
    Descripcion: "",
    Usu_Nombre: "Armando",
  },
  {
    ID_Dibujo: 25,
    Titulo: "Umbreon",
    Nombre_del_archivo: "1593098319011-2436798.png",
    Descripcion: "Hay diferentes maneras de ver lo mismo",
    Usu_Nombre: "Ejemplo12",
  },
  {
    ID_Dibujo: 26,
    Titulo: "Sketch",
    Nombre_del_archivo: "1593098372167-289280102.jpg",
    Descripcion: "Un icono amistoso",
    Usu_Nombre: "Armando",
  },
  {
    ID_Dibujo: 27,
    Titulo: "El ritual",
    Nombre_del_archivo: "1593098427414-295237574.png",
    Descripcion: "",
    Usu_Nombre: "Sion14",
  },
  {
    ID_Dibujo: 28,
    Titulo: "Visiones",
    Nombre_del_archivo: "1593098684450-861678336.jpg",
    Descripcion: "Experimentando con colores ",
    Usu_Nombre: "Ejemplo15",
  },
  {
    ID_Dibujo: 29,
    Titulo: "Fox",
    Nombre_del_archivo: "1593099378623-624496413.jpg",
    Descripcion: "......",
    Usu_Nombre: "Ejemplo15",
  },
  {
    ID_Dibujo: 30,
    Titulo: "...",
    Nombre_del_archivo: "1593099423388-361583635.png",
    Descripcion: "......",
    Usu_Nombre: "Sion14",
  },
  {
    ID_Dibujo: 31,
    Titulo: "...",
    Nombre_del_archivo: "1593099441003-628126394.png",
    Descripcion: "......",
    Usu_Nombre: "Ricardo",
  },
  {
    ID_Dibujo: 33,
    Titulo: "Relax Time",
    Nombre_del_archivo: "1593099642181-594739549.png",
    Descripcion: "......",
    Usu_Nombre: "Armando",
  },
  {
    ID_Dibujo: 34,
    Titulo: "Relax Time",
    Nombre_del_archivo: "1593099765495-910883431.png",
    Descripcion: "......",
    Usu_Nombre: "Ejemplo12",
  },
  {
    ID_Dibujo: 35,
    Titulo: "The Escape",
    Nombre_del_archivo: "1593099797260-195580306.png",
    Descripcion: "......",
    Usu_Nombre: "Ejemplo12",
  },
];

function conectarse(parametro, dato) {
  const user = parametro.usuario;
  let contra = parametro.contrasena;
  let data = {
    usuario: "no existe",
    msg: "El usuario no existe",
  };

  for (let i = 0; i < lista.length; i++) {
    if (lista[i].usuario === user) {
      data.msg = "La contraseña no coincide";
      data.usuario = "";
    }
    if (
      data.msg === "La contraseña no coincide" &&
      lista[i].contrasena === contra
    ) {
      data.msg = "conexion exitosa";
      data.usuario = [user, 0];
    }
  }
  return data;
}

function busqueda(dato) {
  if (dato === "" || dato === " ") {
    return todosLosDibujos.reverse();
  }

  let regex = new RegExp(dato, "i");

  let respuesta = todosLosDibujos.filter((info) => {
    return regex.test(info.Titulo) || regex.test(info.Usu_Nombre);
  });

  return respuesta;
}

function perfilUsuario(usuario) {
  let data = {
    msg: "No existe ese usuario",
  };
  const perfil = datosDePerfil.find((user) => user.Usu_Nombre === usuario);

  const galeria = galerias.filter((dibujo) => dibujo.Usu_Nombre === usuario);

  console.log(perfil);
  if (perfil) {
    data = {
      msg: "",
      nombreCompleto: perfil.Nombre_Completo,
      email: perfil.Usu_Email,
      especialidad: perfil.Especialidad,
      tipo: perfil.Usu_tipo,
      pais: perfil.Pais,
      idiomas: perfil.Idiomas,
      icono: perfil.Nombre_del_archivo,
      galeria: galeria,
    };
  }
  return data;
}

function perfilDibujo(id) {
  const datos = todosLosDibujos.find((obj) => obj.ID_Dibujo === Number(id));
  console.log(datos);
  return datos;
}
export { conectarse, dibujosIndex, busqueda, perfilDibujo, perfilUsuario };
