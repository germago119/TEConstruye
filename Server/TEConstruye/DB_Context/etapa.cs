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
    
    public partial class etapa
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public etapa()
        {
            this.etapa_obra = new HashSet<etapa_obra>();
        }
    
        public int codigo { get; set; }
        public string nombre { get; set; }
        public int presupuesto { get; set; }
        public System.DateTime fechainicio { get; set; }
        public System.DateTime fechafin { get; set; }
        public Nullable<int> costo { get; set; }
        public int codigo_material { get; set; }
    
        public virtual etapa_default etapa_default { get; set; }
        public virtual material material { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<etapa_obra> etapa_obra { get; set; }
    }
}
