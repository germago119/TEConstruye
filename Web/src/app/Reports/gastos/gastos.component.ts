import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.sass']
})
export class GastosComponent implements OnInit {
  gastos: any;

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
