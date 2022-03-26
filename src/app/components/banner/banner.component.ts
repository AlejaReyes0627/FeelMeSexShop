import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  logo:string;
  logo2:string;
  logoCart:string;

  constructor() { 
    this.logo = '/assets/img/logo.png';
    this.logo2 = '/assets/img/logo2.png';
    this.logoCart = '/assets/img/icons/carrito.ico';
  }

  ngOnInit(): void {
  }

}
