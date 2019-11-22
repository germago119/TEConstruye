import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { DataService } from '../../data.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-ing',
  templateUrl: './ing.component.html',
  styleUrls: ['./ing.component.sass']
})
export class IngComponent implements OnInit {
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
          class: 'icon ion-ios-contact bg-transparent border-primary'
        }
      }
    },
    {
      key: 'apellido',
      type: 'input',
      templateOptions: {
        placeholder: 'Doe',
        label: 'Apellido: ',
        description: 'Apellido debe ser texto',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-bowtie bg-transparent border-primary '
        }
      }
    },
    {
      key: 'codigo',
      type: 'input',
      templateOptions: {
        type: 'number',
        placeholder: '***',
        label: 'Codigo',
        description: 'Codigo debe ser un numero',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-medal bg-transparent border-primary'
        }
      }
    },
    {
      key: 'especialidad',
      type: 'select',
      defaultValue: 'civil',
      templateOptions: {
        label: 'Especialidad',
        required: true,
        options: [
          { label: 'Ing. Civil', value: 'civil' },
          { label: 'Ing. Electrica', value: 'electrica' },
          { label: 'Ing. Construccion', value: 'constru' }
        ],
        addonLeft: {
          class: 'icon ion-ios-flask bg-transparent border-primary'
        }
      }
    },
    {
      key: 'cedula',
      type: 'input',
      templateOptions: {
        type: 'number',
        placeholder: '5-0429-0265',
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
        placeholder: '13245678',
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

  inge;
  enfasis;

  showForm() {
    this.show = !this.show;
  }

  submit() {
    this.http.postClient(this.model).subscribe(
      data => {
        console.log(data);
        alert('Se agregó con éxito la etapa');
      },
      error => {
        console.log(error);
        alert('Ocurrió un error');
      }
    );

    //alert(JSON.stringify(this.model));

    location.reload();
  }

  ngOnInit() {
    this.http.getIngeniero().subscribe(
      data => {
        this.inge = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );

    this.http.getESP().subscribe(
      data => {
        this.enfasis = data;
        console.log(data);
        console.log('ESP');
      },
      error => {
        console.log(error);
      }
    );
  }
}

export interface Esp {
  $id: string;
  ingeniero_especialidad: any[];
  nombre: string;
}
