//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DBContext
{
    using System;
    using System.Collections.Generic;
    
    public partial class obra
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public obra()
        {
            this.etapa_obra = new HashSet<etapa_obra>();
        }
    
        public string nombre { get; set; }
        public string ubicacion { get; set; }
        public int metcuadlote { get; set; }
        public int metcuadconst { get; set; }
        public int pisos { get; set; }
        public Nullable<int> baños { get; set; }
        public Nullable<int> canthabit { get; set; }
        public string nombre_proyecto { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<etapa_obra> etapa_obra { get; set; }
        public virtual proyecto proyecto { get; set; }
    }
}
