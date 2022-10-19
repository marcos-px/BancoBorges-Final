-- Adminer 4.8.1 MySQL 8.0.31 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

CREATE DATABASE `banco_borges` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `banco_borges`;

DROP TABLE IF EXISTS `enderecos`;
CREATE TABLE `enderecos` (
  `idenderecos` int NOT NULL AUTO_INCREMENT,
  `cep` varchar(9) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `logradouro` varchar(255) DEFAULT NULL,
  `complemento` varchar(255) DEFAULT NULL,
  `bairro` varchar(255) NOT NULL,
  `cidade` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL,
  `idpessoa` int NOT NULL,
  PRIMARY KEY (`idenderecos`),
  KEY `idpessoa` (`idpessoa`),
  CONSTRAINT `enderecos_ibfk_1` FOREIGN KEY (`idpessoa`) REFERENCES `pessoas` (`idpessoa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `pessoas`;
CREATE TABLE `pessoas` (
  `idpessoa` int NOT NULL AUTO_INCREMENT,
  `cep` varchar(8) NOT NULL,
  `limiteCredito` int NOT NULL DEFAULT '0',
  `dataCadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `dataAtualizacao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `observacoes` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  PRIMARY KEY (`idpessoa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `pessoas_fisicas`;
CREATE TABLE `pessoas_fisicas` (
  `idpessoas_fisicas` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `cpf` varchar(20) NOT NULL,
  `idpessoa` int NOT NULL,
  PRIMARY KEY (`idpessoas_fisicas`),
  KEY `idpessoa` (`idpessoa`),
  CONSTRAINT `pessoas_fisicas_ibfk_1` FOREIGN KEY (`idpessoa`) REFERENCES `pessoas` (`idpessoa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `pessoas_juridicas`;
CREATE TABLE `pessoas_juridicas` (
  `idpessoas_juridicas` int NOT NULL AUTO_INCREMENT,
  `razaoSocial` varchar(255) NOT NULL,
  `cnpj` varchar(14) NOT NULL,
  `idpessoa` int NOT NULL,
  PRIMARY KEY (`idpessoas_juridicas`),
  KEY `idpessoa` (`idpessoa`),
  CONSTRAINT `pessoas_juridicas_ibfk_1` FOREIGN KEY (`idpessoa`) REFERENCES `pessoas` (`idpessoa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- 2022-10-15 01:40:22
