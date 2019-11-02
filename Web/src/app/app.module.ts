import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanillaComponent } from './Reports/planilla/planilla.component';
import { GastosComponent } from './Reports/gastos/gastos.component';
import { EstadoComponent } from './Reports/estado/estado.component';
import { PresupuestoComponent } from './Shared/presupuesto/presupuesto.component';
import { IngComponent } from './Admin/ing/ing.component';
import { ClientComponent } from './Admin/client/client.component';
import { EmployeeComponent } from './Admin/employee/employee.component';
import { MaterialComponent } from './Admin/material/material.component';
import { HoursComponent } from './Admin/hours/hours.component';
import { ExpensesComponent } from './Admin/expenses/expenses.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { EtapasComponent } from './Shared/etapas/etapas.component';
import { RPresupuestoComponent } from './Reports/r-presupuesto/r-presupuesto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AlertModule,
  BsDatepickerModule,
  ButtonsModule,
  CarouselModule,
  ModalModule,
  PaginationModule
} from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PlanillaComponent,
    GastosComponent,
    EstadoComponent,
    PresupuestoComponent,
    IngComponent,
    ClientComponent,
    EmployeeComponent,
    MaterialComponent,
    HoursComponent,
    ExpensesComponent,
    DashboardComponent,
    EtapasComponent,
    RPresupuestoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    PaginationModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
