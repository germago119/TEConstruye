import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { DataService } from '../../data.service';
import { Observable, of } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent implements OnInit {
  constructor(private http: DataService, private location: Location) {}
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'nombre',
      type: 'input',
      templateOptions: {
        placeholder: 'John',
        label: 'Nombre: ',
        description: 'Nombre debe ser texto',
        required: true,
        addonLeft: {
          class: 'icon ion-md-contact bg-transparent border-primary'
        }
      }
    },
    {
      key: 'apellido1',
      type: 'input',
      templateOptions: {
        placeholder: 'Doe',
        label: 'Primer Apellido: ',
        description: 'Apellido debe ser texto',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-bowtie bg-transparent border-primary'
        }
      }
    },
    {
      key: 'Nombre_Proyecto',
      type: 'select',
      templateOptions: {
        label: 'Seleccione el proyecto: ',
        options: [
          {
            nombre: 'Proyecto X',
            value: 'Proyecto X'
          }
        ],
        required: true,
        addonLeft: {
          class: 'icon ion-ios-home bg-transparent border-primary'
        }
      }
    },
    {
      key: 'cedula',
      type: 'input',
      templateOptions: {
        type: 'number',
        placeholder: '',
        label: 'Cedula',
        description: 'Cedula debe tener 9 digitos',
        required: true,
        min: 100000000,
        max: 999999999,
        addonLeft: {
          class: 'icon ion-ios-finger-print bg-transparent border-primary'
        }
      }
    },
    {
      key: 'telefono',
      type: 'input',
      templateOptions: {
        type: 'number',
        placeholder: '',
        label: 'Telefono',
        description: 'Telefono debe tener 8 digitos',
        required: true,
        min: 10000000,
        max: 99999999,
        addonLeft: {
          class: 'icon ion-ios-call bg-transparent border-primary'
        }
      }
    },
    {
      key: 'salario',
      type: 'input',
      templateOptions: {
        type: 'number',
        placeholder: '',
        label: 'Pago por hora',
        description: 'Pago por hora debe ser un numero',
        required: true,
        // min: 10000000,
        // max: 99999999,
        addonLeft: {
          class: 'icon ion-logo-usd bg-transparent border-primary'
        }
      }
    }
  ];

  show = false;
  empleados;
  proyecto;

  ngOnInit() {
    this.http.getEmpleado().subscribe(
      data => {
        this.empleados = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
    this.http.getProyecto().subscribe(
      data => {
        this.proyecto = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  showForm() {
    this.show = !this.show;
  }

  currency(money: number) {
    // Create our number formatter.
    const formatter = new Intl.NumberFormat('es-CR', {
      style: 'currency',
      currency: 'CRC'
    });

    return formatter.format(money); /* $2,500.00 */
  }

  submit() {
    this.http.postEmpleado(this.model).subscribe(
      data => {
        console.log(data);
        alert('Se agregó con éxito la etapa');
      },
      error => {
        console.log(error);
        alert('Ocurrió un error');
      }
    );

    // alert(JSON.stringify(this.model));

    location.reload();
  }
}
