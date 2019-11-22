import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-r-presupuesto',
  templateUrl: './r-presupuesto.component.html',
  styleUrls: ['./r-presupuesto.component.sass']
})
export class RPresupuestoComponent implements OnInit {
  presupuestos: any;

  constructor(private http: DataService) {}

  ngOnInit() {}

  colones(money: number) {
    const formatter = new Intl.NumberFormat('es-CR', {
      style: 'colones',
      currency: 'CRC'
    });

    return formatter.format(money);
  }
}
