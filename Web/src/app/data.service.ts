import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  mate = [{ id: '1', name: 'CEMEX' }, { id: '2', name: 'LANCO' }];

  constructor(private http: HttpClient) {}

  getMaterials(): Observable<any[]> {
    return of(this.mate);
  }

  // api/Cliente, api/Empleado, api/Especialidad, api/Etapa, api/Etapa_Obra, api/Etapa_Default, api/Ingeniero,
  // api/Factura, api/Ingeniero_Especialidad, api/Material, api/Obra, api/Proyect

  // GET

  getClient() {
    return this.http.get(
      'https://teconstruye20191121115206.azurewebsites.net/api/Cliente'
    );
  }

  getESP() {
    return this.http.get(
      'https://teconstruye20191121115206.azurewebsites.net/api/Especialidad'
    );
  }

  getEmpleado() {
    return this.http.get(
      'https://teconstruye20191121115206.azurewebsites.net/api/Empleado'
    );
  }

  getIngeniero() {
    return this.http.get(
      'https://teconstruye20191121115206.azurewebsites.net/api/Ingeniero'
    );
  }

  getIngenieroEspecialidad() {
    return this.http.get(
      'https://teconstruye20191121115206.azurewebsites.net/api/Ingeniero_Especialidad'
    );
  }

  getMaterial() {
    return this.http.get(
      'https://teconstruye20191121115206.azurewebsites.net/api/Material'
    );
  }

  getEtapa() {
    return this.http.get(
      'https://teconstruye20191121115206.azurewebsites.net/api/Etapa'
    );
  }

  getEtapa_Obra() {
    return this.http.get(
      'https://teconstruye20191121115206.azurewebsites.net/api/Etapa_Obra'
    );
  }

  getEtapa_Default() {
    return this.http.get(
      'https://teconstruye20191121115206.azurewebsites.net/api/Etapa_Default'
    );
  }

  getProyecto() {
    return this.http.get<any[]>(
      'https://teconstruye20191121115206.azurewebsites.net/api/Proyecto'
    );
  }

  getObra() {
    return this.http.get(
      'https://teconstruye20191121115206.azurewebsites.net/api/Obra'
    );
  }

  getFactura() {
    return this.http.get(
      'https://teconstruye20191121115206.azurewebsites.net/api/Factura'
    );
  }

  // REPORTES

  getCompras() {
    return this.http.get(
      'https://teconstruye20191121115206.azurewebsites.net/api/reporteGastos'
    );
  }

  getReportajePresupuesto(id) {
    return this.http.get(
      'https://teconstruye20191121115206.azurewebsites.net/api/reportePresupuesto/' +
        id
    );
  }

  getTieneEtapas() {
    return this.http.get(
      'https://teconstruye20191121115206.azurewebsites.net/api/tieneEtapas'
    );
  }

  getEstado(id) {
    return this.http.get(
      'https://teconstruye20191121115206.azurewebsites.net/api/reporteEstado/' +
        id
    );
  }

  getReporteGastos() {
    return this.http.get(
      'https://teconstruye20191121115206.azurewebsites.net/api/reporteGastos/'
    );
  }

  getAsignacionHoras(id) {
    return this.http.get(
      'https://teconstruye20191121115206.azurewebsites.net/api/asignacionHoras/' +
        id
    );
  }

  getAsignacionEtapas(id) {
    return this.http.get(
      'https://teconstruye20191121115206.azurewebsites.net/api/asignacionEtapas/' +
        id
    );
  }

  // POST

  postProfesional(json) {
    return this.http.post(
      'https://teconstruye20191121115206.azurewebsites.net/api/Ingeniero',
      json
    );
  }

  postClient(json) {
    return this.http.post(
      'https://teconstruye20191121115206.azurewebsites.net/api/Cliente',
      json
    );
  }

  postObra(json) {
    return this.http.post(
      'https://teconstruye20191121115206.azurewebsites.net/api/Obra',
      json
    );
  }
  postEtapaDefault(json) {
    return this.http.post(
      'https://teconstruye20191121115206.azurewebsites.net/api/Etapa_Default',
      json
    );
  }
  postEmpleado(json) {
    return this.http.post(
      'https://teconstruye20191121115206.azurewebsites.net/api/Empleado',
      json
    );
  }

  postMaterial(json) {
    return this.http.post(
      'https://teconstruye20191121115206.azurewebsites.net/api/Material',
      json
    );
  }

  postEtapa(json) {
    return this.http.post(
      'https://teconstruye20191121115206.azurewebsites.net/api/Etapa',
      json
    );
  }

  postExpense(json) {
    return this.http.post(
      'https://teconstruye20191121115206.azurewebsites.net/api/Gasto',
      json
    );
  }
}
