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
      key: 'NombreEtapa',
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
      key: 'Descripcion',
      type: 'input',
      templateOptions: {
        placeholder: '',
        label: 'Descripción: ',
        description: 'Descripción debe ser texto',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-clipboard bg-transparent border-primary'
        }
      }
    }
  ];

  show = false;
  etapas;

  ngOnInit() {
    this.http.getEtapa_Default().subscribe(data => {
      this.etapas = data;
      console.log(this.etapas);
    });
  }

  submit() {
    this.http.postEtapaDefault(this.model).subscribe(
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

  showForm() {
    this.show = !this.show;
  }

  constructor(private location: Location, private http: DataService) {}

  backClicked() {
    this.location.back();
  }
}
