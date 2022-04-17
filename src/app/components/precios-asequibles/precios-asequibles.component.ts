import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-precios-asequibles',
  templateUrl: './precios-asequibles.component.html',
  styleUrls: ['./precios-asequibles.component.css']
})
export class PreciosAsequiblesComponent implements OnInit {
  precios: string;

  constructor() {
    this.precios = '/assets/img/preciosAsequibles/precio.png';
  }

  ngOnInit(): void {
  }

}
