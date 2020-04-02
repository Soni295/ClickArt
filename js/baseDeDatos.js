var datos =
{
  "Usuarios":
  [
    {
      "ID":1,
      "Usuario":"Sion",
      "Email":"sion1403@hotmail.com", 
      "Contrasena":"123456",
      "Confirmar":"123456",
      "Tipo_de_Usuario":4
    },
    {
      "ID":2,
      "Usuario":"Juan",
      "Email":"Juantopo@hotmail.com", 
      "Contrasena":"123456",
      "Confirmar":"123456",
      "Tipo_de_Usuario":3
    }
  ]
};


pampa= (datos.Usuarios).length+1
datos.Usuarios[(datos.Usuarios).length] ={
  "ID": pampa,
  "Usuario":"Pedro",
  "Email":"Panchonacho@hotmail.com", 
  "Contrasena":"123456",
  "Confirmar":"123456",
  "Tipo_de_Usuario":2};


//console.log((datos.Usuarios).length-1)

//console.log(Number(datos.Usuarios[0].ID) +1);

//datos.Usuarios.ID[0] = datos.Usuarios.ID[0]+1

//agregar("armando","patata@hotmail.com","dieeego","dieeego",3);

var dato={
    "ID":null,
    "Usuario":null,
    "Email":null, 
    "Contrasena":null,
    "Confirmar":null,
    "Tipo_de_Usuario":null
  };

  idGenerador=(datos.Usuarios).length+1;

  dato.ID = idGenerador;
  dato.Usuario = usuario;
  dato.Email = email;
  dato.Contrasena = contrasena;
  dato.Confirmar = contrasena2;
  dato.Tipo_de_Usuario = tipo;

  datos.Usuarios[(datos.Usuarios).length]= dato

console.log(datos)

