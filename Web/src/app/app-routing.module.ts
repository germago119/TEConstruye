import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ClientComponent } from './Admin/client/client.component';
import { EmployeeComponent } from './Admin/employee/employee.component';
import { ExpensesComponent } from './Admin/expenses/expenses.component';
import { HoursComponent } from './Admin/hours/hours.component';
import { IngComponent } from './Admin/ing/ing.component';
import { MaterialComponent } from './Admin/material/material.component';
import { EtapasComponent } from './Shared/etapas/etapas.component';
import { PresupuestoComponent } from './Shared/presupuesto/presupuesto.component';
import { EstadoComponent } from './Reports/estado/estado.component';
import { GastosComponent } from './Reports/gastos/gastos.component';
import { PlanillaComponent } from './Reports/planilla/planilla.component';
import { RPresupuestoComponent } from './Reports/r-presupuesto/r-presupuesto.component';
import { DashboardEngineerComponent } from './Engineer/dashboard-engineer/dashboard-engineer.component';
import { ObrasComponent } from './Engineer/obras/obras.component';
import { MaterialesPorEtapaComponent } from './Engineer/materiales-por-etapa/materiales-por-etapa.component';
import { EtapasPorProyectoComponent } from './Engineer/etapas-por-proyecto/etapas-por-proyecto.component';

const routes: Routes = [
  // Admin
  { path: 'admin', component: DashboardComponent },
  { path: 'client', component: ClientComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'hours', component: HoursComponent },
  { path: 'ing', component: IngComponent },
  { path: 'material', component: MaterialComponent },
  // Engineer
  { path: 'engineer', component: DashboardEngineerComponent },
  { path: 'engineer/obras', component: ObrasComponent },
  {
    path: 'engineer/materialesPorEtapa',
    component: MaterialesPorEtapaComponent
  },
  { path: 'engineer/etapasPorProyecto', component: EtapasPorProyectoComponent },
  // SHARED
  { path: 'etapas', component: EtapasComponent },
  { path: 'presupuesto', component: PresupuestoComponent },
  // Reports
  { path: 'restado', component: EstadoComponent },
  { path: 'rgastos', component: GastosComponent },
  { path: 'rplanilla', component: PlanillaComponent },
  { path: 'rpresupuesto', component: RPresupuestoComponent }
  //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
