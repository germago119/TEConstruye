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
    public class EtapaController : ApiController
    {
        private teconstruyeEntities db = new teconstruyeEntities();

        public IHttpActionResult Options()
        {
            HttpContext.Current.Response.AppendHeader("Allow", "GET,DELETE,PUT,POST,OPTIONS");
            return Ok();
        }
        // GET: api/Etapa
        public IQueryable<etapa> Getetapa()
        {
            return db.etapa;
        }

        // GET: api/Etapa/5
        [ResponseType(typeof(etapa))]
        public IHttpActionResult Getetapa(int id)
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
        public IHttpActionResult Putetapa(int id, etapa etapa)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != etapa.codigo)
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
                if (etapaExists(etapa.codigo))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = etapa.codigo }, etapa);
        }

        // DELETE: api/Etapa/5
        [ResponseType(typeof(etapa))]
        public IHttpActionResult Deleteetapa(int id)
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

        private bool etapaExists(int id)
        {
            return db.etapa.Count(e => e.codigo == id) > 0;
        }
    }
}