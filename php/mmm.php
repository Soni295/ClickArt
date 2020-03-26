<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>

<?php
/*
	print "hola";//imprimo en la pag

	$nombre="Juan"; //declaro variable

	$edad=19;// no necesita decir el tipo

	print " " . $nombre . "<br>";//se usa el punto para concadenar 

	print "El nombre es $nombre <br>";// tambien se puede asi

	print 'El nombre es $nombre <br>';// con comillas simples escribe literal lo q esta ahi

	echo "hola me llamo " . $nombre . " y tengo " . $edad . " años. <br>"; // echo permite concadenar varias variables

	//echo $nombre, $edad ."<br>";// echo permite concadenar varias variables

	/*print $nombre, $edad;*/ //print esto no lo permite
/*

	include ("funcion.php");//llamo un archivo externo de php la diferencia entre include y require incluye sigue ejecutando y require no cuando no existe

	imprimir();//la funcion imprime hola

	function incri(){

		static $contador=0;// aca digo q este valor solo se ejecute la primera vez q use la funcion

		$contador++;

		echo $contador . "<br>";
	}

	incri();//1
	incri();//2
	incri();//3
	incri();//4
	incri();//5




	$variableee1 = "Casa";
	$variableee2 = "CASA";

	$resultado=strcmp($variableee1,$variableee2);//compara dos str   1 = no son iguales /0=son iguales

	echo "El resultado es $resultado <br>";


	$resultado=strcasecmp($variableee1,$variableee2);//lo mismo pero ignora las mayusculas y minusculas


	echo "El resultado es $resultado <br>";

	//var_dump(variable) devuelve el tipo de vairable q tengas, string,int,float,array, caracteristicas de los datos de adentro



	class Automovil{//declaro una clase
		function Automovil(){//pongo los atributos del objeto

			$this->Año="2020";
			$this->Marca="BMW";
			$this->modelo="M2";

		}
	}

	//Creo un objeto

	$herbie= new Automovil();

	//le pido que me muestre las propiedades

	echo "El modelo es $herbie->modelo ";
	echo "pertenese al año $herbie->Año ";
	echo "y es de la marca $herbie->Marca ";

	echo "<br>";

	//strlen() devuelve la longitud de un string

	echo strlen("Hello world!");//12
	echo "<br>";

	//str_word_count() devulve la cantidad de palabras

	echo str_word_count("Hello world!");//2
	echo "<br>";

	//stropos sirve para buscar una cadena de texto especifico  y te devuelve el indice

	echo strpos("Hello world!", "world");//6
	echo "<br>";

	//str_replace(parabra a reemplazar,reemplazo, string completo) sirve para reemplazar un string en particlar

	echo str_replace("mundo","Mama", "hola mundo");// hola Mama
	echo "<br>";

	//define("Nombre de la constante","Valor")las constantes siempre en mayuscula sin $ define.

	define("AUTOR","Juan");

	echo AUTOR;
	echo "<br>";
	//if(condicion){accion;}
	//if(condition){accion;} else {accion;}
	//if(condition){accion;} elseif {accion;} else {accion;}


	//switch

	$favcolor= "red";

	switch ($favcolor) {
		case 'red':
			echo "tu color favorito es el rojo";
			break;
		case 'blue':
			echo "tu color favorito es el azul";
			break;
		case 'purpul':
			echo "tu color favorito es el violeta";
			break;
		default:
			echo "No esta contemplada la opcion elegida";
			break;
	}
	echo "<br>";

	//una array se crea $variable= array("objeto1","objeto2","objeto3");

	$verduleria=  array("frutilla","sandia","melon","lechuga");

	echo "en esta verduleria tenemos $verduleria[0] ,$verduleria[1] ,$verduleria[2] ,$verduleria[3] .";
	echo "<br>";

	//count sirve contar los elementos en una array.

	echo count($verduleria)."<br>";

	//foreach(array as (nombre cualquiera para indice)){accion}

	$autos = array("Ferrari","Fiat","BWM","Minicooper");

	foreach($autos as $auto){

		echo $auto . "<br>";

	}

	//en las arrays se le puede asociar valores

	$edad = array("Juan"=>"35", "Ben"=>"37", "Mia"=>"43");

	$edad["Roman"]="60";

	$cantidad = count($edad);

	foreach($edad as $x => $val) {

  	echo "$x = $val<br>";

	}

	foreach($edad as $x => $x_value) {
    echo "Key=" . $x . ", Value=" . $x_value;
    echo "<br>";
}


*/

 // la matrix multidimencional voy a poner masca stock y vendidos

 	$autos = array
		  (
		  array("Volvo",22,18),
		  array("BMW",15,13),
		  array("Saab",5,2),
		  array("Land Rover",17,15)
		  );

	echo $autos[0][0].": en stock: ".$autos[0][1].", vendidos: ".$autos[0][2].".<br>";
	echo $autos[1][0].": en stock: ".$autos[1][1].", vendidos: ".$autos[1][2].".<br>";
	echo $autos[2][0].": en stock: ".$autos[2][1].", vendidos: ".$autos[2][2].".<br>";
	echo $autos[3][0].": en stock: ".$autos[3][1].", vendidos: ".$autos[3][2].".<br>";

	for ($fila = 0; $fila < 4; $fila++) {
  		echo "<p><b>Fila Numero $fila</b></p>";
  		echo "<ul>";
  		
  		for ($columna = 0; $columna < 3; $columna++) {
    		echo "<li>".$autos[$fila][$columna]."</li>";
  		}
  		echo "</ul>";

  	}



?>
	
</body>
</html>