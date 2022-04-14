import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devoluciones',
  templateUrl: './devoluciones.component.html',
  styleUrls: ['./devoluciones.component.css']
})
export class DevolucionesComponent implements OnInit {

  devolucImg:string;
  iconDev:string;
  constructor() {
    this.devolucImg = '/assets/img/devoluciones/devolucionImg.webp';
    this.iconDev = '/assets/img/devoluciones/iconDevol.webp';
   }

  ngOnInit(): void {
  }

}
