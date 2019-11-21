import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.sass']
})
export class PresupuestoComponent implements OnInit {
  ngOnInit() {}

  constructor(private location: Location) {}

  backClicked() {
    this.location.back();
  }
}
