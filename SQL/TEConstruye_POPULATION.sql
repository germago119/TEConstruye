INSERT INTO cliente (cedula,nombre,apellido,telefono) 
VALUES (123456789,'Anastasio','Quintanilla',11111111),
(987654321,'Federico','Fernandez',88888888),
(111111111,'Paquito','Maya',21323121);

INSERT INTO especialidad (nombre)
VALUES('civil'),('electrico'),('construccion'),('diseñador');

INSERT INTO factura(numero,fotofactura)
VALUES(1213123142,NULL),
(213215453,NULL);

INSERT INTO proyecto (nombre,proveedor,numero_factura)
VALUES('Cafeteria F&B','Pioneros',1213123142),
('Proyecto X','RiotGames',213215453);

INSERT INTO ingeniero(cedula,telefono,nombre,apellido,codigo,nombre_proyecto)
VALUES(3520778,88319771,'Juan','Mendez',69,'Proyecto X'),
(3213211,88821833,'Fabian','Mora',73,'Cafeteria F&B');

INSERT INTO ingeniero_especialidad (cedula_ingeniero,nombre_especialidad)
VALUES(3520778,'diseñador'),
(3213211,'construccion');

INSERT INTO empleado(cedula,nombre,apellido,telefono,horasproyecto,pagohora,nombre_proyecto)
VALUES(2140727,'Arnau','Alonso',85637633,NULL,NULL,'Proyecto X'),
(1635838,'Carlota','Riera',80759017,NULL,NULL,'Proyecto X'),
(42316234,'Natalia','Gallardo',80152017,NULL,NULL,'Cafeteria F&B'),
(47419881,'Biel','Grau',80219017,NULL,NULL,'Cafeteria F&B');

INSERT INTO obra(nombre,ubicacion,metcuadlote,metcuadconst,pisos,baños,canthabit,nombre_proyecto)
VALUES('Cafeteria Familiar','San Jose',200,150,2,3,1,'Cafeteria F&B'),
('Secretos','Cartago',100,75,1,2,3,'Proyecto X');

INSERT INTO material(codigo,nombre,proveedor,preciounitario)
VALUES(121,'Cemento','Holcim',7000),
(213,'Block','Holcim',500),
(348,'Pintura','Sur',15000),
(8962,'Regla Madera','Maderas Centroamerica',1500);

INSERT INTO etapa_default(nombreetapa,descripcion)
VALUES('Trabajo Preliminar','Planeacion del trabajo'),
('Cimientos','Colocacion de los cimientos'),
('Paredes','Paredes colocadas'),
('Concreto Reforzado','Reforzamiento del concreto'),
('Techos','Colocar el techo'),
('Cielos','Poner los cielos de la construccion'),
('Repello','Capa de revestidor a las paredes'),
('Entrepisos','Preparar el entrepiso'),
('Pisos','Colocar los pisos(ceramica)'),
('Enchapes','Enchapar los pisos'),
('Instalación Pluvial','Sistemas de acueductos'),
('Instalación Sanitaria','Instalacion de baños y duchas'),
('Instalación Eléctrica','Realizar la instalion de todo el cableado electrico'),
('Puertas','Colocar las puertas'),
('Cerrajería','Colocar la cerrajeria'),
('Ventanas','Agregar las ventanas'),
('Closets','Colocar los muebles'),
('Mueble de Cocina','Colocar muebles para la cocina'),
('Pintura','Pintado de la estructura'),
('Escaleras','Colocacion de escaleras/gradas');

INSERT INTO etapa(nombre,presupuesto,fechainicio,fechafin,costo,codigo_material)
VALUES('Trabajo Preliminar',10000,'2019-11-18','2019-11-20',4000,213);

INSERT INTO etapa_obra(nombre_etapa,nombre_obra)
VALUES('Trabajo Preliminar','Cafeteria Familiar');
