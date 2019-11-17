import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.sass']
})
export class ObrasComponent implements OnInit {

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
          class: 'icon ion-ios-home bg-transparent border-primary'
        }
      }
    },
    {
      key: 'ubicacion',
      type: 'input',
      templateOptions: {
        placeholder: '',
        label: 'Ubicación: ',
        description: 'Ubicación debe ser texto',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-bicycle bg-transparent border-primary'
        }
      }
    },
    {
      key: 'cantHabitaciones',
      type: 'input',
      templateOptions: {
        type: 'number',
        placeholder: '',
        label: 'Cantidad de Habitaciones:',
        description: 'La cantidad de habitaciones debe ser un número',
        required: true,
        min: 0,
        addonLeft: {
          class: 'icon ion-ios-cube bg-transparent border-primary'
        }
      }
    },
    {
      key: 'cantBanos',
      type: 'input',
      templateOptions: {
        type: 'number',
        placeholder: '',
        label: 'Cantidad de Baños:',
        description: 'La cantidad de baños debe ser un número',
        required: true,
        min: 0,
        addonLeft: {
          class: 'icon ion-ios-man bg-transparent border-primary'
        }
      }
    },
    {
      key: 'pisos',
      type: 'input',
      templateOptions: {
        type: 'number',
        placeholder: '',
        label: 'Número de Pisos:',
        description: 'La cantidad de pisos debe ser un número',
        required: true,
        min: 0,
        addonLeft: {
          class: 'icon ion-ios-apps bg-transparent border-primary'
        }
      }
    },
    {
      key: 'metrosConstruccion',
      type: 'input',
      templateOptions: {
        type: 'number',
        placeholder: '',
        label: 'Metros cuadrados de construcción:',
        description: 'Los metros cuadrados de construcción deben ser un número',
        required: true,
        min: 40,
        addonLeft: {
          class: 'icon ion-ios-stats bg-transparent border-primary'
        }
      }
    },
    {
      key: 'metrosLote',
      type: 'input',
      templateOptions: {
        type: 'number',
        placeholder: '',
        label: 'Metros cuadrados de lote:',
        description: 'Los metros cuadrados del lote deben ser un número',
        required: true,
        min: 60,
        addonLeft: {
          class: 'icon ion-ios-image bg-transparent border-primary'
        }
      }
    },
    {
      key: 'cliente',
      type: 'select',
      templateOptions: {
        label: 'Cliente: ',
        //options: this.dataService.getMaterials(),
        valueProp: 'id',
        labelProp: 'name',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-contacts bg-transparent border-primary'
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
