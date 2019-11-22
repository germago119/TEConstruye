import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.sass']
})
export class MaterialComponent implements OnInit {
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
          class: 'icon ion-ios-hammer bg-transparent border-primary'
        }
      }
    },
    {
      key: 'proveedor',
      type: 'input',
      templateOptions: {
        placeholder: 'Holcim',
        label: 'Proveedor: ',
        description: 'Proveedor debe ser texto',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-contact bg-transparent border-primary'
        }
      }
    },
    {
      key: 'codigo',
      type: 'input',
      templateOptions: {
        placeholder: 'Doe',
        label: 'Codigo: ',
        description: 'Codigo debe ser texto',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-key bg-transparent border-primary'
        }
      }
    },
    {
      key: 'preciounitario',
      type: 'input',
      templateOptions: {
        type: 'number',
        placeholder: '',
        label: 'Precio unitario:',
        description: 'Cedula debe ser un numero',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-pricetag bg-transparent border-primary'
        }
      }
    }
  ];

  show = false;
  material;

  ngOnInit() {
    this.http.getMaterial().subscribe(
      data => {
        this.material = data;
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
    this.http.postMaterial(this.model).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
        alert('Ocurrió un error');
      }
    );

    alert(JSON.stringify(this.model));

    location.reload();
  }

  currency(money: number) {
    // Create our number formatter.
    const formatter = new Intl.NumberFormat('es-CR', {
      style: 'currency',
      currency: 'CRC'
    });

    return formatter.format(money); /* $2,500.00 */
  }
}
