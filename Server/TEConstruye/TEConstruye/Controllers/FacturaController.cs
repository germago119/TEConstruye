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
    public class FacturaController : ApiController
    {
        private teconstruyeEntities db = new teconstruyeEntities();

        public IHttpActionResult Options()
        {
            HttpContext.Current.Response.AppendHeader("Allow", "GET,DELETE,PUT,POST,OPTIONS");
            return Ok();
        }
        // GET: api/Factura
        public IQueryable<factura> Getfactura()
        {
            return db.factura;
        }

        // GET: api/Factura/5
        [ResponseType(typeof(factura))]
        public IHttpActionResult Getfactura(int id)
        {
            factura factura = db.factura.Find(id);
            if (factura == null)
            {
                return NotFound();
            }

            return Ok(factura);
        }

        // PUT: api/Factura/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putfactura(int id, factura factura)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != factura.numero)
            {
                return BadRequest();
            }

            db.Entry(factura).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!facturaExists(id))
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

        // POST: api/Factura
        [ResponseType(typeof(factura))]
        public IHttpActionResult Postfactura(factura factura)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.factura.Add(factura);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (facturaExists(factura.numero))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = factura.numero }, factura);
        }

        // DELETE: api/Factura/5
        [ResponseType(typeof(factura))]
        public IHttpActionResult Deletefactura(int id)
        {
            factura factura = db.factura.Find(id);
            if (factura == null)
            {
                return NotFound();
            }

            db.factura.Remove(factura);
            db.SaveChanges();

            return Ok(factura);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool facturaExists(int id)
        {
            return db.factura.Count(e => e.numero == id) > 0;
        }
    }
}