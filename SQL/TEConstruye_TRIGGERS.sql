CREATE OR REPLACE FUNCTION EspecialidadDefault() RETURNS TRIGGER
LANGUAGE plpgsql
AS $EspecialidadDefault$
BEGIN
IF OLD.nombre='civil' or OLD.nombre='electrico' or OLD.nombre='construccion' then
	RAISE EXCEPTION'No se puede eliminar es dato default';
END IF;
RETURN OLD;
END;
$EspecialidadDefault$;

CREATE TRIGGER protegerEspecialidadDefault
BEFORE DELETE ON ESPECIALIDAD
FOR EACH ROW EXECUTE PROCEDURE EspecialidadDefault();

CREATE OR REPLACE FUNCTION EtapaDefault() RETURNS TRIGGER
LANGUAGE plpgsql
AS $EspecialidadDefault$
BEGIN
IF OLD.nombreetapa='Trabajo Preliminar' OR OLD.nombreetapa='Cimientos' or OLD.nombreetapa='construccion'
OR OLD.nombreetapa='Concreto Reforzado' OR OLD.nombreetapa='Techos' OR OLD.nombreetapa='Cielos' 
OR OLD.nombreetapa='Repello' OR OLD.nombreetapa='Entrepisos'OR OLD.nombreetapa='Pisos'
OR OLD.nombreetapa='Enchapes' OR OLD.nombreetapa='Instalación Pluvial' OR OLD.nombreetapa='Instalación Sanitaria' 
OR OLD.nombreetapa='Instalación Eléctrica' OR OLD.nombreetapa='Puertas' OR OLD.nombreetapa='Cerrajería' 
OR OLD.nombreetapa='Ventanas'OR OLD.nombreetapa='Closets' OR OLD.nombreetapa='Mueble de Cocina' 
OR OLD.nombreetapa='Pintura' OR OLD.nombreetapa='Escaleras' THEN
	RAISE EXCEPTION'No se puede eliminar es dato default';
END IF;
RETURN OLD;
END;
$EspecialidadDefault$;

CREATE TRIGGER protegerEtapaDefault
BEFORE DELETE ON ETAPA_DEFAULT
FOR EACH ROW EXECUTE PROCEDURE EtapaDefault();

