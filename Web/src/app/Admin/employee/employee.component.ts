import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent implements OnInit {
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
          class: 'icon lnr lnr-user bg-transparent border-primary'
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
      key: 'apellido2',
      type: 'input',
      templateOptions: {
        placeholder: '---',
        label: 'Segundo Apellido: ',
        description: 'Apellido debe ser texto',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-color-filter bg-transparent border-primary'
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
          class: 'icon lnr lnr-diamond bg-transparent border-primary'
        }
      }
    }
  ];

  constructor() {}

  ngOnInit() {}

  submit() {
    alert(JSON.stringify(this.model));
  }
}
