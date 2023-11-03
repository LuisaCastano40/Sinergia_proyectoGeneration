-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-11-2023 a las 23:05:41
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `persona`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrativos`
--

CREATE TABLE `administrativos` (
  `ID_Administrativos` int(11) NOT NULL,
  `Nombre` varchar(255) DEFAULT NULL,
  `Correo` varchar(255) DEFAULT NULL,
  `Contraseña` varchar(15) DEFAULT NULL,
  `Cargo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `administrativos`
--

INSERT INTO `administrativos` (`ID_Administrativos`, `Nombre`, `Correo`, `Contraseña`, `Cargo`) VALUES
(1, 'Luisa Castaño', 'loise.0607@gmail.com', 'lU00Vacas@', 'Desarrolladora'),
(2, 'Edgar Riaño', 'edgar@gmail.com', 'Edgar00@', 'Desarrollador'),
(3, 'Sara Ruiz', 'sara@gmail.com', 'sara00@', 'Desarrolladora'),
(4, 'Miguel Martínez', 'miguel@gmail.com', 'Miguel00@', 'Desarrollador'),
(5, 'Andrés Martínez', 'andresM@gmail.com', 'andres00@', 'Administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `barberos`
--

CREATE TABLE `barberos` (
  `ID_Barbero` int(11) NOT NULL,
  `Nombre` varchar(50) DEFAULT NULL,
  `Apellido` varchar(50) DEFAULT NULL,
  `Fecha_Nacimiento` date DEFAULT NULL,
  `Genero` varchar(20) DEFAULT NULL,
  `Celular` varchar(15) DEFAULT NULL,
  `Direccion` varchar(50) DEFAULT NULL,
  `Correo` varchar(50) DEFAULT NULL,
  `Fecha_Contratacion` date DEFAULT NULL,
  `Cantidad_Productos_Vendidos` int(11) DEFAULT NULL,
  `Prestamos` decimal(10,2) DEFAULT NULL,
  `salario` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `barberos`
--

INSERT INTO `barberos` (`ID_Barbero`, `Nombre`, `Apellido`, `Fecha_Nacimiento`, `Genero`, `Celular`, `Direccion`, `Correo`, `Fecha_Contratacion`, `Cantidad_Productos_Vendidos`, `Prestamos`, `salario`) VALUES
(1, 'Miguel', 'Pérez', '0000-00-00', 'masculino', '555-555-5555', 'avenida rosales', 'miguel@gmail.com', '0000-00-00', 10, 0.00, 1.16),
(2, 'Valeria', 'Pérez', '0000-00-00', 'femenino', '555-555-5555', 'avenida rosales', 'valeria@gmail.com', '0000-00-00', 10, 0.00, 1.16),
(3, 'Wallas', 'Pérez', '0000-00-00', 'masculino', '555-555-5555', 'avenida rosales', 'wallas@gmail.com', '0000-00-00', 10, 0.00, 1.16),
(4, 'Kevin', 'Pérez', '0000-00-00', 'masculino', '555-555-5555', 'avenida rosales', 'kevin@gmail.com', '0000-00-00', 10, 0.00, 1.16),
(5, 'Andrés', 'Pérez', '0000-00-00', 'masculino', '555-555-5555', 'avenida rosales', 'andres@gmail.com', '0000-00-00', 10, 0.00, 1.16);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `ID_Cliente` int(11) NOT NULL,
  `Nombre` varchar(50) DEFAULT NULL,
  `Apellido` varchar(50) DEFAULT NULL,
  `Celular` varchar(15) DEFAULT NULL,
  `Correo` varchar(50) DEFAULT NULL,
  `Como_conocio` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`ID_Cliente`, `Nombre`, `Apellido`, `Celular`, `Correo`, `Como_conocio`) VALUES
(1, 'Victor', 'Real', '555-555-5555', 'victor@gmail.com', 'redes'),
(2, 'Rebeca', 'Bnitez', '555-555-5555', 'rebeca@gmail.com', 'redes'),
(3, 'Juan', 'Diallo', '555-555-5555', 'juan@gmail.com', 'redes'),
(4, 'Tomás', 'Berrocal', '555-555-5555', 'tomas@gmail.com', 'redes'),
(5, 'Juliana', 'herrera', '555-555-5555', 'juliana@gmail.com', 'redes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes_barberos`
--

CREATE TABLE `clientes_barberos` (
  `ID_Clientes_Barberos` int(11) NOT NULL,
  `ID_Cliente` int(11) DEFAULT NULL,
  `ID_Barbero` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
--

CREATE TABLE `pagos` (
  `ID_Pagos` int(11) NOT NULL,
  `Fecha_de_pago` date DEFAULT NULL,
  `Monto_de_pago` varchar(255) DEFAULT NULL,
  `Metodo_de_pago` varchar(15) DEFAULT NULL,
  `ID_Ventas` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pagos`
--

INSERT INTO `pagos` (`ID_Pagos`, `Fecha_de_pago`, `Monto_de_pago`, `Metodo_de_pago`, `ID_Ventas`) VALUES
(1, '2023-07-02', '50.000', 'efectivo', NULL),
(2, '2023-07-02', '50.000', 'daviplata', NULL),
(3, '2023-07-02', '50.000', 'efectivo', NULL),
(4, '2023-07-02', '50.000', 'efectivo', NULL),
(5, '2023-07-02', '50.000', 'ahorro a la man', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `ID_Producto` int(11) NOT NULL,
  `Nombre_de_producto` varchar(255) DEFAULT NULL,
  `Descripcion` varchar(255) DEFAULT NULL,
  `Categoria` varchar(255) DEFAULT NULL,
  `Etiqueta` varchar(255) DEFAULT NULL,
  `Precio` int(11) DEFAULT NULL,
  `Cantidad` int(11) DEFAULT NULL,
  `Proveedor` varchar(255) DEFAULT NULL,
  `Descuento` int(11) DEFAULT NULL,
  `Fecha_de_adicion` date DEFAULT NULL,
  `Imagen_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`ID_Producto`, `Nombre_de_producto`, `Descripcion`, `Categoria`, `Etiqueta`, `Precio`, `Cantidad`, `Proveedor`, `Descuento`, `Fecha_de_adicion`, `Imagen_url`) VALUES
(1, 'Producto A', 'Descripción del Producto A', 'Electrónica', 'Oferta', 200, 50, 'Proveedor XYZ', 0, '0000-00-00', NULL),
(2, 'Producto B', 'Descripción del Producto B', 'Ropa', 'Nuevo', 50, 100, 'Proveedor ABC', 0, '0000-00-00', NULL),
(3, 'Producto C', 'Descripción del Producto C', 'Hogar', 'Oferta', 80, 30, 'Proveedor QRS', 0, '0000-00-00', NULL),
(4, 'Producto D', 'Descripción del Producto D', 'Electrodomésticos', 'Nuevo', 300, 20, 'Proveedor WXY', 0, '0000-00-00', NULL),
(5, 'Producto E', 'Descripción del Producto E', 'Joyería', 'Oferta', 150, 10, 'Proveedor DEF', 0, '0000-00-00', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `ID_Reserva` int(11) NOT NULL,
  `Fecha_reserva` date DEFAULT NULL,
  `Hora_reserva` time DEFAULT NULL,
  `Medio_reserva` varchar(50) DEFAULT NULL,
  `Valor_total` decimal(10,2) DEFAULT NULL,
  `ID_Barbero` int(11) DEFAULT NULL,
  `ID_Cliente` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`ID_Reserva`, `Fecha_reserva`, `Hora_reserva`, `Medio_reserva`, `Valor_total`, `ID_Barbero`, `ID_Cliente`) VALUES
(1, '0000-00-00', '14:00:00', 'Teléfono', 80.00, NULL, NULL),
(2, '0000-00-00', '15:30:00', 'Sitio web', 120.00, NULL, NULL),
(3, '0000-00-00', '10:45:00', 'Correo electrónico', 60.00, NULL, NULL),
(4, '0000-00-00', '16:15:00', 'Aplicación móvil', 95.00, NULL, NULL),
(5, '0000-00-00', '12:30:00', 'Presencial', 70.00, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios`
--

CREATE TABLE `servicios` (
  `ID_Servicio` int(11) NOT NULL,
  `Nombre_Servicio` varchar(50) DEFAULT NULL,
  `Descripcion` text DEFAULT NULL,
  `Costo` decimal(10,2) DEFAULT NULL,
  `Duracion` time DEFAULT NULL,
  `Imagen_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `servicios`
--

INSERT INTO `servicios` (`ID_Servicio`, `Nombre_Servicio`, `Descripcion`, `Costo`, `Duracion`, `Imagen_url`) VALUES
(1, 'Masaje Relajante', 'Un masaje suave y relajante que alivia el estrés y la tensión muscular.', 50.00, '00:00:00', NULL),
(2, 'Corte de Cabello', 'Un corte de cabello moderno y elegante para hombres y mujeres.', 25.00, '00:00:45', NULL),
(3, 'Tratamiento Facial', 'Un tratamiento facial rejuvenecedor que revitaliza la piel.', 70.00, '00:00:00', NULL),
(4, 'Manicura y Pedicura', 'Un servicio completo de manicura y pedicura con esmaltado de uñas.', 40.00, '00:00:00', NULL),
(5, 'Entrenamiento Personal', 'Sesiones de entrenamiento personalizado con un instructor experto.', 60.00, '00:00:00', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios_reservas`
--

CREATE TABLE `servicios_reservas` (
  `ID_Servicio` int(11) DEFAULT NULL,
  `ID_Reserva` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `ID_Ventas` int(11) NOT NULL,
  `Medio_de_Venta` varchar(255) DEFAULT NULL,
  `Fecha_de_Venta` date DEFAULT NULL,
  `Monto_total_de_Venta` decimal(10,2) DEFAULT NULL,
  `ID_Producto` int(11) DEFAULT NULL,
  `ID_Barbero` int(11) DEFAULT NULL,
  `ID_Cliente` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`ID_Ventas`, `Medio_de_Venta`, `Fecha_de_Venta`, `Monto_total_de_Venta`, `ID_Producto`, `ID_Barbero`, `ID_Cliente`) VALUES
(1, 'fisico', '2023-10-25', 25000.00, NULL, NULL, NULL),
(2, 'fisico', '2023-10-26', 27000.00, NULL, NULL, NULL),
(3, 'Virtual', '2023-10-27', 28000.00, NULL, NULL, NULL),
(4, 'fisico', '2023-10-28', 35000.00, NULL, NULL, NULL),
(5, 'Virtual', '2023-10-30', 25000.00, NULL, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrativos`
--
ALTER TABLE `administrativos`
  ADD PRIMARY KEY (`ID_Administrativos`);

--
-- Indices de la tabla `barberos`
--
ALTER TABLE `barberos`
  ADD PRIMARY KEY (`ID_Barbero`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`ID_Cliente`);

--
-- Indices de la tabla `clientes_barberos`
--
ALTER TABLE `clientes_barberos`
  ADD PRIMARY KEY (`ID_Clientes_Barberos`),
  ADD KEY `ID_Cliente` (`ID_Cliente`),
  ADD KEY `ID_Barbero` (`ID_Barbero`);

--
-- Indices de la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`ID_Pagos`),
  ADD KEY `ID_Ventas` (`ID_Ventas`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`ID_Producto`);

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`ID_Reserva`),
  ADD KEY `fk_Barbero` (`ID_Barbero`),
  ADD KEY `fk_Clientes` (`ID_Cliente`);

--
-- Indices de la tabla `servicios`
--
ALTER TABLE `servicios`
  ADD PRIMARY KEY (`ID_Servicio`);

--
-- Indices de la tabla `servicios_reservas`
--
ALTER TABLE `servicios_reservas`
  ADD KEY `ID_Servicio` (`ID_Servicio`),
  ADD KEY `ID_Reserva` (`ID_Reserva`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`ID_Ventas`),
  ADD KEY `ID_Producto` (`ID_Producto`),
  ADD KEY `fk_Barberos` (`ID_Barbero`),
  ADD KEY `fk_Cliente` (`ID_Cliente`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administrativos`
--
ALTER TABLE `administrativos`
  MODIFY `ID_Administrativos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `barberos`
--
ALTER TABLE `barberos`
  MODIFY `ID_Barbero` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `ID_Cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `clientes_barberos`
--
ALTER TABLE `clientes_barberos`
  MODIFY `ID_Clientes_Barberos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pagos`
--
ALTER TABLE `pagos`
  MODIFY `ID_Pagos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `ID_Producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `ID_Reserva` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `servicios`
--
ALTER TABLE `servicios`
  MODIFY `ID_Servicio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `ID_Ventas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `clientes_barberos`
--
ALTER TABLE `clientes_barberos`
  ADD CONSTRAINT `clientes_barberos_ibfk_1` FOREIGN KEY (`ID_Cliente`) REFERENCES `clientes` (`ID_Cliente`),
  ADD CONSTRAINT `clientes_barberos_ibfk_2` FOREIGN KEY (`ID_Barbero`) REFERENCES `barberos` (`ID_Barbero`);

--
-- Filtros para la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD CONSTRAINT `pagos_ibfk_1` FOREIGN KEY (`ID_Ventas`) REFERENCES `ventas` (`ID_Ventas`);

--
-- Filtros para la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD CONSTRAINT `fk_Barbero` FOREIGN KEY (`ID_Barbero`) REFERENCES `barberos` (`ID_Barbero`),
  ADD CONSTRAINT `fk_Clientes` FOREIGN KEY (`ID_Cliente`) REFERENCES `clientes` (`ID_Cliente`);

--
-- Filtros para la tabla `servicios_reservas`
--
ALTER TABLE `servicios_reservas`
  ADD CONSTRAINT `servicios_reservas_ibfk_1` FOREIGN KEY (`ID_Servicio`) REFERENCES `servicios` (`ID_Servicio`),
  ADD CONSTRAINT `servicios_reservas_ibfk_2` FOREIGN KEY (`ID_Reserva`) REFERENCES `reservas` (`ID_Reserva`);

--
-- Filtros para la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD CONSTRAINT `fk_Barberos` FOREIGN KEY (`ID_Barbero`) REFERENCES `barberos` (`ID_Barbero`),
  ADD CONSTRAINT `fk_Cliente` FOREIGN KEY (`ID_Cliente`) REFERENCES `clientes` (`ID_Cliente`),
  ADD CONSTRAINT `ventas_ibfk_3` FOREIGN KEY (`ID_Producto`) REFERENCES `productos` (`ID_Producto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
