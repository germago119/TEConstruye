import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-etapas-por-proyecto',
  templateUrl: './etapas-por-proyecto.component.html',
  styleUrls: ['./etapas-por-proyecto.component.sass']
})
export class EtapasPorProyectoComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
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
    }
  ];

  constructor() {}

  ngOnInit() {}

  submit() {
    alert(JSON.stringify(this.model));

    location.reload();
  }
}
