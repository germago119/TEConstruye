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
    public class IngenieroController : ApiController
    {
        private teconstruyeEntities db = new teconstruyeEntities();

        public IHttpActionResult Options()
        {
            HttpContext.Current.Response.AppendHeader("Allow", "GET,DELETE,PUT,POST,OPTIONS");
            return Ok();
        }
        // GET: api/Ingeniero
        public IQueryable<ingeniero> Getingeniero()
        {
            return db.ingeniero;
        }

        // GET: api/Ingeniero/5
        [ResponseType(typeof(ingeniero))]
        public IHttpActionResult Getingeniero(int id)
        {
            ingeniero ingeniero = db.ingeniero.Find(id);
            if (ingeniero == null)
            {
                return NotFound();
            }

            return Ok(ingeniero);
        }

        // PUT: api/Ingeniero/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putingeniero(int id, ingeniero ingeniero)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != ingeniero.cedula)
            {
                return BadRequest();
            }

            db.Entry(ingeniero).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ingenieroExists(id))
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

        // POST: api/Ingeniero
        [ResponseType(typeof(ingeniero))]
        public IHttpActionResult Postingeniero(ingeniero ingeniero)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ingeniero.Add(ingeniero);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (ingenieroExists(ingeniero.cedula))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = ingeniero.cedula }, ingeniero);
        }

        // DELETE: api/Ingeniero/5
        [ResponseType(typeof(ingeniero))]
        public IHttpActionResult Deleteingeniero(int id)
        {
            ingeniero ingeniero = db.ingeniero.Find(id);
            if (ingeniero == null)
            {
                return NotFound();
            }

            db.ingeniero.Remove(ingeniero);
            db.SaveChanges();

            return Ok(ingeniero);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ingenieroExists(int id)
        {
            return db.ingeniero.Count(e => e.cedula == id) > 0;
        }
    }
}