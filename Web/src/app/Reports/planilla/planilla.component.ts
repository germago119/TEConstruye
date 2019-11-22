import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-planilla',
  templateUrl: './planilla.component.html',
  styleUrls: ['./planilla.component.sass']
})
export class PlanillaComponent implements OnInit {
  planillas: any;

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
