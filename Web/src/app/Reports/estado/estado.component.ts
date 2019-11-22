import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.sass']
})
export class EstadoComponent implements OnInit {
  estado: any;

  constructor(private http: DataService) {}

  ngOnInit() {
    /* GET proyectos */
  }

  colones(money: number) {
    const formatter = new Intl.NumberFormat('es-CR', {
      style: 'colones',
      currency: 'CRC'
    });

    return formatter.format(money);
  }
}
