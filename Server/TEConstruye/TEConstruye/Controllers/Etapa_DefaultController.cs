using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using DBContext;

namespace TEConstruye.Controllers
{
    public class Etapa_DefaultController : ApiController
    {
        private teconstruyeEntities db = new teconstruyeEntities();

        // GET: api/Etapa_Default
        public IQueryable<etapa_default> Getetapa_default()
        {
            return db.etapa_default;
        }

        // GET: api/Etapa_Default/5
        [ResponseType(typeof(etapa_default))]
        public IHttpActionResult Getetapa_default(string id)
        {
            etapa_default etapa_default = db.etapa_default.Find(id);
            if (etapa_default == null)
            {
                return NotFound();
            }

            return Ok(etapa_default);
        }

        // PUT: api/Etapa_Default/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putetapa_default(string id, etapa_default etapa_default)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != etapa_default.nombreetapa)
            {
                return BadRequest();
            }

            db.Entry(etapa_default).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!etapa_defaultExists(id))
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

        // POST: api/Etapa_Default
        [ResponseType(typeof(etapa_default))]
        public IHttpActionResult Postetapa_default(etapa_default etapa_default)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.etapa_default.Add(etapa_default);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (etapa_defaultExists(etapa_default.nombreetapa))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = etapa_default.nombreetapa }, etapa_default);
        }

        // DELETE: api/Etapa_Default/5
        [ResponseType(typeof(etapa_default))]
        public IHttpActionResult Deleteetapa_default(string id)
        {
            etapa_default etapa_default = db.etapa_default.Find(id);
            if (etapa_default == null)
            {
                return NotFound();
            }

            db.etapa_default.Remove(etapa_default);
            db.SaveChanges();

            return Ok(etapa_default);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool etapa_defaultExists(string id)
        {
            return db.etapa_default.Count(e => e.nombreetapa == id) > 0;
        }
    }
}