import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

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
      key: 'proyecto',
      type: 'select',
      templateOptions: {
        label: 'Proyecto: ',
        //options: this.dataService.getMaterials(),
        valueProp: 'id',
        labelProp: 'name',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-hammer bg-transparent border-primary'
        }
      }
    },
    {
      key: 'etapa',
      type: 'select',
      templateOptions: {
        label: 'Etapa: ',
        //options: this.dataService.getMaterials(),
        valueProp: 'id',
        labelProp: 'name',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-clipboard bg-transparent border-primary'
        }
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  submit() {
    alert(JSON.stringify(this.model));
  }

}
