CREATE DATABASE TECres2

GO
USE TECres2
GO
CREATE TABLE CLIENTE(
ID INT IDENTITY(1,1) NOT NULL,
Cedula INT PRIMARY KEY NOT NULL,
Nombre VARCHAR(30) NOT NULL,
Apellido1 VARCHAR(30) NOT NULL,
Apellido2 VARCHAR(30),
Nacionalidad VARCHAR(50),
Correo VARCHAR(50),
)

GO
CREATE TABLE UBICACION(
ID INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
Provincia VARCHAR(50) NOT NULL,
Canton VARCHAR(50) NOT NULL,
Distrito VARCHAR(50) NOT NULL
)

GO
CREATE TABLE PROPIEDAD(
ID INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
Precio INT NOT NULL,
Direccion_Exacta VARCHAR(150) NOT NULL,
Titulo VARCHAR(30) NOT NULL,
Niveles INT NOT NULL,
Tamano_Terreno INT NOT NULL,
Tamano_Construccion INT NOT NULL,
Cant_Habitaciones INT NOT NULL,
Cant_Banos INT NOT NULL,
Cant_Parqueos INT NOT NULL,
Ubicacion VARCHAR(50) NOT NULL,
Cedula_Cliente INT NOT NULL,
FOREIGN KEY (Cedula_Cliente) REFERENCES CLIENTE(Cedula)
)



USE TECres2
UPDATE Worksheet$
SET Cedula=CONVERT(INT,REPLACE(Cedula,'-',''));


DELETE FROM [Worksheet$]
    WHERE Cedula IN (SELECT Cedula FROM [Worksheet$] 
            GROUP BY Cedula
            HAVING COUNT(*)>1);/**INSERT MINIMO */



USE TECres2
INSERT INTO CLIENTE(Cedula,Nombre,Apellido1,Nacionalidad,Correo)
SELECT Cedula, left(nombre, CHARINDEX(' ', nombre)) as Nombre,
substring(nombre, CHARINDEX(' ', nombre)+1, len(nombre)-(CHARINDEX(' ', 
nombre)-1)) as Apellido1,W.Nacionalidad,W.Correo
from [Worksheet$] AS W;