-- MariaDB dump 10.19  Distrib 10.5.9-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: midb
-- ------------------------------------------------------
-- Server version	10.5.9-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dibujo`
--

DROP TABLE IF EXISTS `dibujo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dibujo` (
  `ID_Dibujo` int(200) NOT NULL AUTO_INCREMENT,
  `Titulo` varchar(50) NOT NULL,
  `Nombre_del_archivo` char(200) NOT NULL,
  `Descripcion` char(250) NOT NULL,
  `Usu_Nombre` varchar(60) NOT NULL DEFAULT 'Armando',
  PRIMARY KEY (`ID_Dibujo`),
  KEY `Usu_Nombre` (`Usu_Nombre`),
  CONSTRAINT `dibujo_ibfk_1` FOREIGN KEY (`Usu_Nombre`) REFERENCES `usuarios` (`Usu_Nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dibujo`
--

LOCK TABLES `dibujo` WRITE;
/*!40000 ALTER TABLE `dibujo` DISABLE KEYS */;
INSERT INTO `dibujo` VALUES (1,'Mi dibujo','icon.png','fdklasdjfÃ±lasdjfalksdjfaÃ±','Sion14'),(2,'Umbreon','1588960658563-940423837.png','pokemon','Armando'),(3,'Titulo12','1588959094640-690753614.png','fsfsdfasfasdfafsdf','Ejemplo12'),(4,'Titulo13','1588010285603-683608727.png','fsfsdfasfasdfafsdf','Ejemplo12'),(6,'Titulo','1588959094640-690753614.png','dasdasd','Ejemplo12'),(7,'asd','1589325363246-624553958.png','asdasd','Armando'),(8,'da','1589325875402-822065111.jpg','sdasdasda','Armando'),(9,'das','1589325893375-238278716.png','dasdasda','Armando'),(10,'sdasd','1586575003809-752194611.png','asdasd','Armando'),(11,'sdasd','1589336986318-959902043.png','asdasd','Armando'),(12,'sdasd','1586575003809-752194611.png','asdasd','Armando'),(13,'sdasd','1589336986318-959902043.png','asdasd','Armando'),(14,'gdfg','1589336960129-503411152.png','dfgdfg','Armando'),(15,'gdf','1589336986318-959902043.png','gdfgdf','Armando'),(16,'gdf','1589337011391-43087993.png','gdfgdf','Armando'),(17,'ssssssssss','1589675406597-832258571.png','sssssssssssssssssssssssss','Armando'),(18,'ssssssssss','1589675408076-949943536.png','sssssssssssssssssssssssss','Armando'),(19,'ssssssssss','1589675416202-999266131.png','sssssssssssssssssssssssss','Ricardo'),(20,'asasd','1589676879901-208874734.png','asdasdasda','Ricardo'),(21,'Sdasda','1589733716967-328666012.png','saasdasd','Ejemplo12'),(22,'fffsdfs','1592340141938-824040425.jpg','dfsdfsdfs','Ejemplo12');
/*!40000 ALTER TABLE `dibujo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `icono`
--

DROP TABLE IF EXISTS `icono`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `icono` (
  `ID_Icono` int(200) NOT NULL,
  `ID_Dibujo` int(200) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `icono`
--

LOCK TABLES `icono` WRITE;
/*!40000 ALTER TABLE `icono` DISABLE KEYS */;
INSERT INTO `icono` VALUES (1,1),(1,1);
/*!40000 ALTER TABLE `icono` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mensaje`
--

DROP TABLE IF EXISTS `mensaje`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mensaje` (
  `ID_mensaje` int(11) NOT NULL AUTO_INCREMENT,
  `Usu_Nombre` varchar(60) NOT NULL,
  `mensaje` text NOT NULL,
  `ID_Sala` int(11) NOT NULL,
  PRIMARY KEY (`ID_mensaje`),
  KEY `Usu_Nombre` (`Usu_Nombre`),
  KEY `ID_Sala` (`ID_Sala`),
  CONSTRAINT `mensaje_ibfk_1` FOREIGN KEY (`Usu_Nombre`) REFERENCES `usuarios` (`Usu_Nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mensaje`
--

LOCK TABLES `mensaje` WRITE;
/*!40000 ALTER TABLE `mensaje` DISABLE KEYS */;
INSERT INTO `mensaje` VALUES (1,'Ejemplo12','ss',1),(2,'Ejemplo12','a',1),(3,'Ejemplo12','a',1),(4,'Ejemplo12','a',1),(5,'Ejemplo12','sda',1),(6,'Ejemplo12','sda',1),(7,'Ejemplo12','s',1),(8,'Ejemplo12','d',1),(9,'Ejemplo12','d',1),(10,'Ejemplo12','d',1),(11,'Ejemplo12','a',1),(12,'Ejemplo12','adsdas',1),(13,'Ejemplo12','adsdas',1),(14,'Ejemplo12','adsdas',1),(15,'Ejemplo12','adsdas',1);
/*!40000 ALTER TABLE `mensaje` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `Usu_Nombre` varchar(60) NOT NULL,
  `Usu_Email` char(80) NOT NULL,
  `Nombre_Completo` char(90) NOT NULL,
  `Usu_tipo` tinyint(10) NOT NULL,
  `Especialidad` char(100) NOT NULL DEFAULT '',
  `Idiomas` char(200) NOT NULL DEFAULT '',
  `Pais` char(100) NOT NULL DEFAULT '',
  `ID_Dibujo` int(200) NOT NULL DEFAULT 1,
  `Usu_Contrasena` char(200) NOT NULL,
  PRIMARY KEY (`Usu_Nombre`),
  KEY `ID_Dibujo` (`ID_Dibujo`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`ID_Dibujo`) REFERENCES `dibujo` (`ID_Dibujo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES ('Armando','ArmandoE@hotmail.com','Armando Esteban quito',1,'ingeniero','aleman','alemania',1,'$2b$10$0qpPrVqyvyBDQjtkZmPMveqLk9mRN2Yrw98XvCDKLPjdXmqQuecNm'),('Ejemplo12','Ejemplo@hotmail.com','Noa',0,'Artista conceptual','Chino','China',1,'$2b$10$6eR8WHZCXknGHlj/cmLSs.nK/SfX6l/XjSGQdbIUQDx8gZ321pXd.'),('Ejemplo15','Juama@hotmail.com','Juan Esteban',0,'','','',1,'$2b$10$ysL9CuyoXnfGD92CSGwLSeeJCpmnuYlYRv0s3ghC9ka/36T1TMkbq'),('Ricardo','RicAlmagro@hotmail.com','Ricardo Martin de la Cruz',0,'DiseÃ±ado de ambiente','EspaÃ±ol','Mexico',1,'$2b$10$s9lhoFJGGfByigyqXuSykeZnfXPCE41daKKIjmWI6PG8VL4HxIcny'),('Sion14','Sionsion@hotmail.com','Sion',1,'','','',1,'0');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-10 13:22:58
