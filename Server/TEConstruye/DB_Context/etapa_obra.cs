//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DB_Context
{
    using System;
    using System.Collections.Generic;
    
    public partial class etapa_obra
    {
        public int codigo_etapa { get; set; }
        public string nombre_obra { get; set; }
        public short id_etaobr { get; set; }
    
       public virtual etapa etapa { get; set; }
       public virtual obra obra { get; set; }
    }
}
