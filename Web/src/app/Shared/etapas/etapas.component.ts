import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { DataService } from '../../data.service';

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
    }
  ];

  show = false;

  ngOnInit() {}

  submit() {
    alert(JSON.stringify(this.model));
  }

  showForm() {
    this.show = !this.show;
  }

  constructor(private location: Location, private http: DataService) {}

  backClicked() {
    this.location.back();
  }
}
