import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit {
  quienesSomos: string;
  mision: string;
  vision: string;

  constructor() {
    this.quienesSomos = '/assets/img/quienesSomos/quienesSomos.jpg';
    this.mision = '/assets/img/quienesSomos/mision.png';
    this.vision = '/assets/img/quienesSomos/vision.jpg';
   }

  ngOnInit(): void {
  }

}
