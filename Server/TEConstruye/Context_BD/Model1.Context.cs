﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Context_BD
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class teconstruyeEntities1 : DbContext
    {
        public teconstruyeEntities1()
            : base("name=teconstruyeEntities1")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<cliente> cliente { get; set; }
        public virtual DbSet<empleado> empleado { get; set; }
        public virtual DbSet<especialidad> especialidad { get; set; }
        public virtual DbSet<etapa> etapa { get; set; }
        public virtual DbSet<etapa_default> etapa_default { get; set; }
        public virtual DbSet<etapa_obra> etapa_obra { get; set; }
        public virtual DbSet<factura> factura { get; set; }
        public virtual DbSet<ingeniero> ingeniero { get; set; }
        public virtual DbSet<ingeniero_especialidad> ingeniero_especialidad { get; set; }
        public virtual DbSet<material> material { get; set; }
        public virtual DbSet<obra> obra { get; set; }
        public virtual DbSet<proyecto> proyecto { get; set; }
    }
}
