CREATE OR REPLACE FUNCTION GenerarPlanilla(OUT Nombre_Empleado VARCHAR,
			 OUT Apellido_Empleado VARCHAR,
			 OUT Nombre_Proyecto VARCHAR,
			 OUT pagototal INT)
			 RETURNS SETOF RECORD
AS $$
BEGIN
	RETURN QUERY
	SELECT E.nombre AS Nombre_Empleado,E.apellido AS Apellido_Empleado,PR.nombre AS Nombre_Proyecto,E.horasproyecto*E.pagohora AS pagototal
	FROM EMPLEADO AS E LEFT JOIN PROYECTO AS PR ON E.nombre_proyecto = PR.nombre
	WHERE E.horasproyecto IS NOT NULL;
END;
$$ LANGUAGE 'plpgsql';

CREATE OR REPLACE FUNCTION ReporteGastos(fecha1 DATE,fecha2 DATE,
										 OUT Nombre_Proyecto VARCHAR, OUT Gastos BIGINT)
										 RETURNS SETOF RECORD
			
AS $$
BEGIN
	RETURN QUERY
	SELECT PR.nombre AS Nombre_Proyecto,SUM(E.Costo) AS Gastos
	FROM ETAPA AS E LEFT JOIN ETAPA_OBRA AS EO ON E.codigo = EO.codigo_etapa
	LEFT JOIN OBRA AS O ON O.nombre = EO.nombre_obra LEFT JOIN PROYECTO AS PR ON PR.nombre = O.nombre_proyecto 
	WHERE E.fechainicio>=fecha1 and E.fechafin<=fecha2
	GROUP BY PR.nombre;
END;
$$ LANGUAGE 'plpgsql';



CREATE OR REPLACE FUNCTION ReporteEstado(OUT Nombre_proyecto VARCHAR,
										 OUT Nombre_Etapa VARCHAR, OUT presupuesto INT,
										OUT Costo INT, OUT diferencia INT)
										 RETURNS SETOF RECORD
			
AS $$
BEGIN
	RETURN QUERY
	SELECT PR.nombre AS nombre_proyecto,E.nombre AS nombre_etapa, E.presupuesto,E.costo,E.presupuesto-E.costo AS diferencia
	FROM PROYECTO AS PR LEFT JOIN OBRA AS O ON O.nombre_proyecto = PR.nombre
	LEFT JOIN ETAPA_OBRA AS EO ON EO.nombre_obra = O.nombre 
	LEFT JOIN ETAPA AS E ON E.codigo = EO.codigo_etapa;

END;
$$ LANGUAGE 'plpgsql';




CREATE OR REPLACE FUNCTION IngeEspe(IN cedulaIN INT, OUT Cedula INT, OUT TELEFONO INT,
										OUT Nombre_Inge VARCHAR, OUT Apellido VARCHAR,
										OUT Nombre_Especialidad VARCHAR,
										OUT Codigo INT, OUT Nombre_Proyecto VARCHAR)
										RETURNS SETOF RECORD
			
AS $$
BEGIN
	RETURN QUERY
	SELECT I.cedula, I.telefono,I.nombre AS Nombre_Inge,I.apellido,IE.nombre_especialidad,I.codigo,I.nombre_proyecto
	FROM INGENIERO AS I LEFT JOIN INGENIERO_ESPECIALIDAD AS IE ON I.cedula = IE.cedula_ingeniero
	WHERE I.cedula=cedulaIN;
END;
$$ LANGUAGE 'plpgsql';



/*
SELECT *
FROM generarpresupuesto();

SELECT *
FROM generarplanilla();

SELECT *
FROM ReporteGastos('2019-11-18','2019-11-25');

SELECT *
FROM reporteestado()

SELECT *
FROM ingeespe(3520778)

*/