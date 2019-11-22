import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.sass']
})
export class ClientComponent implements OnInit {
  constructor(private http: DataService) {}
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
          class: 'icon ion-ios-contact bg-transparent border-primary'
        }
      }
    },
    {
      key: 'apellido',
      type: 'input',
      templateOptions: {
        placeholder: 'Doe',
        label: 'Primer Apellido: ',
        description: 'Apellido debe ser texto',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-bowtie bg-transparent border-primary '
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
    }
  ];

  show = false;

  clientes: any;

  ngOnInit() {
    this.http.getClient().subscribe(data => {
      this.clientes = data;
      console.log(this.clientes);
    });
  }

  showForm() {
    this.show = !this.show;
  }

  submit() {
    alert(JSON.stringify(this.model));
  }
}
