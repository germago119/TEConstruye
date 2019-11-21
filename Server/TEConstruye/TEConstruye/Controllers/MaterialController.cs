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
    public class MaterialController : ApiController
    {
        private teconstruyeEntities db = new teconstruyeEntities();

        public IHttpActionResult Options()
        {
            HttpContext.Current.Response.AppendHeader("Allow", "GET,DELETE,PUT,POST,OPTIONS");
            return Ok();
        }
        // GET: api/Material
        public IQueryable<material> Getmaterial()
        {
            return db.material;
        }

        // GET: api/Material/5
        [ResponseType(typeof(material))]
        public IHttpActionResult Getmaterial(int id)
        {
            material material = db.material.Find(id);
            if (material == null)
            {
                return NotFound();
            }

            return Ok(material);
        }

        // PUT: api/Material/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putmaterial(int id, material material)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != material.codigo)
            {
                return BadRequest();
            }

            db.Entry(material).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!materialExists(id))
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

        // POST: api/Material
        [ResponseType(typeof(material))]
        public IHttpActionResult Postmaterial(material material)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.material.Add(material);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (materialExists(material.codigo))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = material.codigo }, material);
        }

        // DELETE: api/Material/5
        [ResponseType(typeof(material))]
        public IHttpActionResult Deletematerial(int id)
        {
            material material = db.material.Find(id);
            if (material == null)
            {
                return NotFound();
            }

            db.material.Remove(material);
            db.SaveChanges();

            return Ok(material);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool materialExists(int id)
        {
            return db.material.Count(e => e.codigo == id) > 0;
        }
    }
}