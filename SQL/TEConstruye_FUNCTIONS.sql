CREATE OR REPLACE FUNCTION GenerarPresupuesto()
RETURNS TABLE(Nombre_Proyecto VARCHAR,
			 Nombre_Etapa VARCHAR,
			 presupuesto INT)
AS $$
BEGIN
	RETURN QUERY
	SELECT PR.Nombre AS Nombre_Proyecto,E.Nombre AS Nombre_Etapa,E.presupuesto
	FROM PROYECTO AS PR LEFT JOIN OBRA AS O ON PR.Nombre=O.Nombre_Proyecto
	LEFT JOIN ETAPA_OBRA AS EO ON EO.Nombre_Obra=O.Nombre 
	LEFT JOIN ETAPA AS E ON E.Codigo=EO.Codigo_Etapa 
	WHERE EO.Nombre_Obra IS NOT NULL;
END;
$$ LANGUAGE 'plpgsql';
