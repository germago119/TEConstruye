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
    public class ProyectoController : ApiController
    {
        private teconstruyeEntities db = new teconstruyeEntities();

        public IHttpActionResult Options()
        {
            HttpContext.Current.Response.AppendHeader("Allow", "GET,DELETE,PUT,POST,OPTIONS");
            return Ok();
        }
        // GET: api/Proyecto
        public IQueryable<proyecto> Getproyecto()
        {
            return db.proyecto;
        }

        // GET: api/Proyecto/5
        [ResponseType(typeof(proyecto))]
        public IHttpActionResult Getproyecto(string id)
        {
            proyecto proyecto = db.proyecto.Find(id);
            if (proyecto == null)
            {
                return NotFound();
            }

            return Ok(proyecto);
        }

        // PUT: api/Proyecto/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putproyecto(string id, proyecto proyecto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != proyecto.nombre)
            {
                return BadRequest();
            }

            db.Entry(proyecto).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!proyectoExists(id))
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

        // POST: api/Proyecto
        [ResponseType(typeof(proyecto))]
        public IHttpActionResult Postproyecto(proyecto proyecto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.proyecto.Add(proyecto);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (proyectoExists(proyecto.nombre))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = proyecto.nombre }, proyecto);
        }

        // DELETE: api/Proyecto/5
        [ResponseType(typeof(proyecto))]
        public IHttpActionResult Deleteproyecto(string id)
        {
            proyecto proyecto = db.proyecto.Find(id);
            if (proyecto == null)
            {
                return NotFound();
            }

            db.proyecto.Remove(proyecto);
            db.SaveChanges();

            return Ok(proyecto);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool proyectoExists(string id)
        {
            return db.proyecto.Count(e => e.nombre == id) > 0;
        }
    }
}