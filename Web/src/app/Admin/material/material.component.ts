import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.sass']
})
export class MaterialComponent implements OnInit {
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
      key: 'codigo',
      type: 'input',
      templateOptions: {
        placeholder: 'Doe',
        label: 'Codigo: ',
        description: 'Codigo debe ser texto',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-key bg-transparent border-primary'
        }
      }
    },
    {
      key: 'precio',
      type: 'input',
      templateOptions: {
        type: 'number',
        placeholder: '',
        label: 'Precio unitario:',
        description: 'Cedula debe ser un numero',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-pricetag bg-transparent border-primary'
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
