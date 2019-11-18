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
    public class EtapaController : ApiController
    {
        private teconstruyeEntities db = new teconstruyeEntities();

        // GET: api/Etapa
        public IQueryable<etapa> Getetapa()
        {
            return db.etapa;
        }

        // GET: api/Etapa/5
        [ResponseType(typeof(etapa))]
        public IHttpActionResult Getetapa(string id)
        {
            etapa etapa = db.etapa.Find(id);
            if (etapa == null)
            {
                return NotFound();
            }

            return Ok(etapa);
        }

        // PUT: api/Etapa/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putetapa(string id, etapa etapa)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != etapa.nombre)
            {
                return BadRequest();
            }

            db.Entry(etapa).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!etapaExists(id))
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

        // POST: api/Etapa
        [ResponseType(typeof(etapa))]
        public IHttpActionResult Postetapa(etapa etapa)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.etapa.Add(etapa);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (etapaExists(etapa.nombre))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = etapa.nombre }, etapa);
        }

        // DELETE: api/Etapa/5
        [ResponseType(typeof(etapa))]
        public IHttpActionResult Deleteetapa(string id)
        {
            etapa etapa = db.etapa.Find(id);
            if (etapa == null)
            {
                return NotFound();
            }

            db.etapa.Remove(etapa);
            db.SaveChanges();

            return Ok(etapa);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool etapaExists(string id)
        {
            return db.etapa.Count(e => e.nombre == id) > 0;
        }
    }
}