import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css'],
})
export class EnviosComponent implements OnInit {
  delivery: string;
  entregaImagen: string;
  servientrega: string;
  interRapidisimo: string;
  constructor() {
    this.delivery = '/assets/img/envios/delivery_icon.webp';
    this.entregaImagen = '/assets/img/envios/entregaImagen.jpg';
    this.servientrega = '/assets/img/envios/servientrega_logo.png';
    this.interRapidisimo = '/assets/img/envios/inter_logo.jpg';

  }

  ngOnInit(): void {}
}
