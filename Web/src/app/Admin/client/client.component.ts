import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.sass']
})
export class ClientComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      className: '',
      key: 'nombre',
      type: 'input',
      templateOptions: {
        placeholder: 'nombre del cliente',
        addonLeft: {
          class: 'icon ion-ios-contact bg-transparent border-primary',
          size: '16'
        },
        label: 'Nombre: '
      }
    },
    {
      key: 'cedula',
      type: 'input',
      templateOptions: {
        placeholder: '',
        addonLeft: {
          class: 'icon ion-md-heart'
        },

        label: 'One add-on on both side (left: icon, right: text)'
      }
    },
    {
      key: 'right',
      type: 'input',
      templateOptions: {
        placeholder: "Nice, isn't it??",

        addonRight: {
          class: 'icon ion-md-heart'
        },
        label: 'One add-on on the right (icon)'
      }
    }
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }
}
