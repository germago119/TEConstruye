import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { DataService } from '../../data.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.sass']
})
export class HoursComponent implements OnInit {
  constructor(private http: DataService, private location: Location) {}

  totalEmpleados;

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
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
      key: 'horasproyecto',
      type: 'input',
      templateOptions: {
        type: 'number',
        placeholder: '8',
        label: 'Horas: ',
        description: 'Horas debe ser numero',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-bowtie bg-transparent border-primary '
        }
      }
    }
  ];

  show = false;

  ngOnInit() {
    this.http.getEmpleado().subscribe(
      data => {
        this.totalEmpleados = data;
        console.log('Los empleados son:');
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

  submit() {
    alert(JSON.stringify(this.model));

    location.reload();
  }
}
