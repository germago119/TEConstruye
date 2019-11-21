using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;
using DB_Context;

namespace TEConstruye.Controllers
{
    public class EspecialidadController : ApiController
    {
        private teconstruyeEntities db = new teconstruyeEntities();

        public IHttpActionResult Options()
        {
            HttpContext.Current.Response.AppendHeader("Allow", "GET,DELETE,PUT,POST,OPTIONS");
            return Ok();
        }
        // GET: api/Especialidad
        public IQueryable<especialidad> Getespecialidad()
        {
            return db.especialidad;
        }

        // GET: api/Especialidad/5
        [ResponseType(typeof(especialidad))]
        public IHttpActionResult Getespecialidad(string id)
        {
            especialidad especialidad = db.especialidad.Find(id);
            if (especialidad == null)
            {
                return NotFound();
            }

            return Ok(especialidad);
        }

        // PUT: api/Especialidad/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putespecialidad(string id, especialidad especialidad)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != especialidad.nombre)
            {
                return BadRequest();
            }

            db.Entry(especialidad).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!especialidadExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Especialidad
        [ResponseType(typeof(especialidad))]
        public IHttpActionResult Postespecialidad(especialidad especialidad)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.especialidad.Add(especialidad);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (especialidadExists(especialidad.nombre))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = especialidad.nombre }, especialidad);
        }

        // DELETE: api/Especialidad/5
        [ResponseType(typeof(especialidad))]
        public IHttpActionResult Deleteespecialidad(string id)
        {
            especialidad especialidad = db.especialidad.Find(id);
            if (especialidad == null)
            {
                return NotFound();
            }

            db.especialidad.Remove(especialidad);
            db.SaveChanges();

            return Ok(especialidad);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool especialidadExists(string id)
        {
            return db.especialidad.Count(e => e.nombre == id) > 0;
        }
    }
}