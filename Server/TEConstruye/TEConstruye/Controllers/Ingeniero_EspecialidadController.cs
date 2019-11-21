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
    public class Ingeniero_EspecialidadController : ApiController
    {
        private teconstruyeEntities db = new teconstruyeEntities();

        public IHttpActionResult Options()
        {
            HttpContext.Current.Response.AppendHeader("Allow", "GET,DELETE,PUT,POST,OPTIONS");
            return Ok();
        }
        // GET: api/Ingeniero_Especialidad
        public IQueryable<ingeniero_especialidad> Getingeniero_especialidad()
        {
            return db.ingeniero_especialidad;
        }

        // GET: api/Ingeniero_Especialidad/5
        [ResponseType(typeof(ingeniero_especialidad))]
        public IHttpActionResult Getingeniero_especialidad(short id)
        {
            ingeniero_especialidad ingeniero_especialidad = db.ingeniero_especialidad.Find(id);
            if (ingeniero_especialidad == null)
            {
                return NotFound();
            }

            return Ok(ingeniero_especialidad);
        }

        // PUT: api/Ingeniero_Especialidad/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putingeniero_especialidad(short id, ingeniero_especialidad ingeniero_especialidad)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != ingeniero_especialidad.id_ingesp)
            {
                return BadRequest();
            }

            db.Entry(ingeniero_especialidad).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ingeniero_especialidadExists(id))
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

        // POST: api/Ingeniero_Especialidad
        [ResponseType(typeof(ingeniero_especialidad))]
        public IHttpActionResult Postingeniero_especialidad(ingeniero_especialidad ingeniero_especialidad)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ingeniero_especialidad.Add(ingeniero_especialidad);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = ingeniero_especialidad.id_ingesp }, ingeniero_especialidad);
        }

        // DELETE: api/Ingeniero_Especialidad/5
        [ResponseType(typeof(ingeniero_especialidad))]
        public IHttpActionResult Deleteingeniero_especialidad(short id)
        {
            ingeniero_especialidad ingeniero_especialidad = db.ingeniero_especialidad.Find(id);
            if (ingeniero_especialidad == null)
            {
                return NotFound();
            }

            db.ingeniero_especialidad.Remove(ingeniero_especialidad);
            db.SaveChanges();

            return Ok(ingeniero_especialidad);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ingeniero_especialidadExists(short id)
        {
            return db.ingeniero_especialidad.Count(e => e.id_ingesp == id) > 0;
        }
    }
}