import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ClientComponent } from './Admin/client/client.component';
import { EmployeeComponent } from './Admin/employee/employee.component';
import { ExpensesComponent } from './Admin/expenses/expenses.component';
import { HoursComponent } from './Admin/hours/hours.component';
import { IngComponent } from './Admin/ing/ing.component';
import { MaterialComponent } from './Admin/material/material.component';

const routes: Routes = [
  { path: 'admin', component: DashboardComponent },
  { path: 'client', component: ClientComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'hours', component: HoursComponent },
  { path: 'ing', component: IngComponent },
  { path: 'material', component: MaterialComponent }
  // {path: '', component: },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
