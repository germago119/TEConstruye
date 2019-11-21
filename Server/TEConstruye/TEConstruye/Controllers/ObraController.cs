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
    public class ObraController : ApiController
    {
        private teconstruyeEntities db = new teconstruyeEntities();

        public IHttpActionResult Options()
        {
            HttpContext.Current.Response.AppendHeader("Allow", "GET,DELETE,PUT,POST,OPTIONS");
            return Ok();
        }
        // GET: api/Obra
        public IQueryable<obra> Getobra()
        {
            return db.obra;
        }

        // GET: api/Obra/5
        [ResponseType(typeof(obra))]
        public IHttpActionResult Getobra(string id)
        {
            obra obra = db.obra.Find(id);
            if (obra == null)
            {
                return NotFound();
            }

            return Ok(obra);
        }

        // PUT: api/Obra/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putobra(string id, obra obra)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != obra.nombre)
            {
                return BadRequest();
            }

            db.Entry(obra).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!obraExists(id))
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

        // POST: api/Obra
        [ResponseType(typeof(obra))]
        public IHttpActionResult Postobra(obra obra)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.obra.Add(obra);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (obraExists(obra.nombre))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = obra.nombre }, obra);
        }

        // DELETE: api/Obra/5
        [ResponseType(typeof(obra))]
        public IHttpActionResult Deleteobra(string id)
        {
            obra obra = db.obra.Find(id);
            if (obra == null)
            {
                return NotFound();
            }

            db.obra.Remove(obra);
            db.SaveChanges();

            return Ok(obra);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool obraExists(string id)
        {
            return db.obra.Count(e => e.nombre == id) > 0;
        }
    }
}