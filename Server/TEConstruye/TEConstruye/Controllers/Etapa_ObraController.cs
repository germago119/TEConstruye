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
    public class Etapa_ObraController : ApiController
    {
        private teconstruyeEntities db = new teconstruyeEntities();

        public IHttpActionResult Options()
        {
            HttpContext.Current.Response.AppendHeader("Allow", "GET,DELETE,PUT,POST,OPTIONS");
            return Ok();
        }
        // GET: api/Etapa_Obra
        public IQueryable<etapa_obra> Getetapa_obra()
        {
            return db.etapa_obra;
        }

        // GET: api/Etapa_Obra/5
        [ResponseType(typeof(etapa_obra))]
        public IHttpActionResult Getetapa_obra(short id)
        {
            etapa_obra etapa_obra = db.etapa_obra.Find(id);
            if (etapa_obra == null)
            {
                return NotFound();
            }

            return Ok(etapa_obra);
        }

        // PUT: api/Etapa_Obra/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putetapa_obra(short id, etapa_obra etapa_obra)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != etapa_obra.id_etaobr)
            {
                return BadRequest();
            }

            db.Entry(etapa_obra).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!etapa_obraExists(id))
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

        // POST: api/Etapa_Obra
        [ResponseType(typeof(etapa_obra))]
        public IHttpActionResult Postetapa_obra(etapa_obra etapa_obra)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.etapa_obra.Add(etapa_obra);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = etapa_obra.id_etaobr }, etapa_obra);
        }

        // DELETE: api/Etapa_Obra/5
        [ResponseType(typeof(etapa_obra))]
        public IHttpActionResult Deleteetapa_obra(short id)
        {
            etapa_obra etapa_obra = db.etapa_obra.Find(id);
            if (etapa_obra == null)
            {
                return NotFound();
            }

            db.etapa_obra.Remove(etapa_obra);
            db.SaveChanges();

            return Ok(etapa_obra);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool etapa_obraExists(short id)
        {
            return db.etapa_obra.Count(e => e.id_etaobr == id) > 0;
        }
    }
}