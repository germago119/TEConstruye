import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-etapas',
  templateUrl: './etapas.component.html',
  styleUrls: ['./etapas.component.sass']
})
export class EtapasComponent implements OnInit {

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'nombre',
      type: 'input',
      templateOptions: {
        placeholder: '',
        label: 'Nombre: ',
        description: 'Nombre debe ser texto',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-clipboard bg-transparent border-primary'
        }
      }
    },
    {
      key: 'descripcion',
      type: 'textarea',
      templateOptions: {
        placeholder: '',
        label: 'Descripción: ',
        description: 'Descripción debe ser texto',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-partly-sunny bg-transparent border-primary'
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
