import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.sass']
})
export class ExpensesComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'proveedor',
      type: 'input',
      templateOptions: {
        placeholder: 'IKEA',
        label: 'Proveedor: ',
        description: 'Proveedor debe ser texto',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-contacts bg-transparent border-primary'
        }
      }
    },
    {
      key: 'numeroFactura',
      type: 'input',
      templateOptions: {
        type: 'number',
        placeholder: '***',
        label: 'Numero de Factura',
        description: 'Numero de Factura debe ser un numero PLZ',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-pricetag bg-transparent border-primary'
        }
      }
    },
    {
      key: 'materials',
      type: 'select',
      templateOptions: {
        label: 'Materiales: ',
        options: this.dataService.getMaterials(),
        valueProp: 'id',
        labelProp: 'name',
        required: true,
        addonLeft: {
          class: 'icon ion-ios-cart bg-transparent border-primary'
        }
      }
    }
  ];

  show = false;

  showForm() {
    this.show = !this.show;
  }

  submit() {
    alert(JSON.stringify(this.model));
  }

  constructor(private dataService: DataService) {}

  ngOnInit() {}
}
