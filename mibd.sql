-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-05-2020 a las 23:29:44
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mibd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dibujo`
--

CREATE TABLE `dibujo` (
  `ID_Dibujo` int(200) NOT NULL,
  `Titulo` varchar(50) NOT NULL,
  `Nombre_del_archivo` char(200) NOT NULL,
  `Descripcion` char(250) NOT NULL,
  `Usu_Nombre` varchar(60) NOT NULL DEFAULT 'Armando'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `dibujo`
--

INSERT INTO `dibujo` (`ID_Dibujo`, `Titulo`, `Nombre_del_archivo`, `Descripcion`, `Usu_Nombre`) VALUES
(1, 'Mi dibujo', 'icon.png', 'fdklasdjfñlasdjfalksdjfañ', 'Sion14'),
(2, 'Umbreon', '1588960658563-940423837.png', 'pokemon', 'Armando'),
(3, 'Titulo12', '1588959094640-690753614.png', 'fsfsdfasfasdfafsdf', 'Ejemplo12'),
(4, 'Titulo13', '1588010285603-683608727.png', 'fsfsdfasfasdfafsdf', 'Ejemplo12'),
(6, 'Titulo', '1588959094640-690753614.png', 'dasdasd', 'Ejemplo12'),
(7, 'asd', '1589325363246-624553958.png', 'asdasd', 'Armando'),
(8, 'da', '1589325875402-822065111.jpg', 'sdasdasda', 'Armando'),
(9, 'das', '1589325893375-238278716.png', 'dasdasda', 'Armando'),
(10, 'sdasd', '1586575003809-752194611.png', 'asdasd', 'Armando'),
(11, 'sdasd', '1589336986318-959902043.png', 'asdasd', 'Armando'),
(12, 'sdasd', '1586575003809-752194611.png', 'asdasd', 'Armando'),
(13, 'sdasd', '1589336986318-959902043.png', 'asdasd', 'Armando'),
(14, 'gdfg', '1589336960129-503411152.png', 'dfgdfg', 'Armando'),
(15, 'gdf', '1589336986318-959902043.png', 'gdfgdf', 'Armando'),
(16, 'gdf', '1589337011391-43087993.png', 'gdfgdf', 'Armando'),
(17, 'ssssssssss', '1589675406597-832258571.png', 'sssssssssssssssssssssssss', 'Armando'),
(18, 'ssssssssss', '1589675408076-949943536.png', 'sssssssssssssssssssssssss', 'Armando'),
(19, 'ssssssssss', '1589675416202-999266131.png', 'sssssssssssssssssssssssss', 'Ricardo'),
(20, 'asasd', '1589676879901-208874734.png', 'asdasdasda', 'Ricardo'),
(21, 'Sdasda', '1589733716967-328666012.png', 'saasdasd', 'Ejemplo12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `icono`
--

CREATE TABLE `icono` (
  `ID_Icono` int(200) NOT NULL,
  `ID_Dibujo` int(200) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `icono`
--

INSERT INTO `icono` (`ID_Icono`, `ID_Dibujo`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `Usu_Nombre` varchar(60) NOT NULL,
  `Usu_Email` char(80) NOT NULL,
  `Nombre_Completo` char(90) NOT NULL,
  `Usu_tipo` tinyint(10) NOT NULL,
  `Especialidad` char(100) NOT NULL,
  `Idiomas` char(200) NOT NULL,
  `Pais` char(100) NOT NULL,
  `ID_Dibujo` int(200) NOT NULL DEFAULT 1,
  `Usu_Contrasena` char(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`Usu_Nombre`, `Usu_Email`, `Nombre_Completo`, `Usu_tipo`, `Especialidad`, `Idiomas`, `Pais`, `ID_Dibujo`, `Usu_Contrasena`) VALUES
('Armando', 'ArmandoE@hotmail.com', 'Armando Esteban quito', 1, 'ingeniero', 'aleman', 'alemania', 1, '$2b$10$0qpPrVqyvyBDQjtkZmPMveqLk9mRN2Yrw98XvCDKLPjdXmqQuecNm'),
('Ejemplo12', 'Ejemplo@hotmail.com', 'Noa', 0, 'Artista conceptual', 'Chino', 'China', 1, '$2b$10$6eR8WHZCXknGHlj/cmLSs.nK/SfX6l/XjSGQdbIUQDx8gZ321pXd.'),
('Ricardo', 'RicAlmagro@hotmail.com', 'Ricardo Martin de la Cruz', 0, 'Diseñado de ambiente', 'Español', 'Mexico', 1, '$2b$10$s9lhoFJGGfByigyqXuSykeZnfXPCE41daKKIjmWI6PG8VL4HxIcny'),
('Sion14', 'Sionsion@hotmail.com', 'Sion', 1, '', '', '', 1, '0');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `dibujo`
--
ALTER TABLE `dibujo`
  ADD PRIMARY KEY (`ID_Dibujo`),
  ADD KEY `Usu_Nombre` (`Usu_Nombre`);

--
-- Indices de la tabla `icono`
--
ALTER TABLE `icono`
  ADD PRIMARY KEY (`ID_Icono`),
  ADD KEY `ID_Dibujo` (`ID_Dibujo`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`Usu_Nombre`),
  ADD KEY `ID_Dibujo` (`ID_Dibujo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `dibujo`
--
ALTER TABLE `dibujo`
  MODIFY `ID_Dibujo` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `icono`
--
ALTER TABLE `icono`
  MODIFY `ID_Icono` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `dibujo`
--
ALTER TABLE `dibujo`
  ADD CONSTRAINT `dibujo_ibfk_1` FOREIGN KEY (`Usu_Nombre`) REFERENCES `usuarios` (`Usu_Nombre`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`ID_Dibujo`) REFERENCES `dibujo` (`ID_Dibujo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
