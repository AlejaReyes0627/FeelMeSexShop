import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css',
'./normalize.css']
})
export class MenuComponent implements OnInit {
  logoFeelMe:string;
  SloganFeelMe:string;
  banner1:string;
  icono1:string;
  icono2:string;
  icono3:string;
  icono4:string;

  constructor(public router: Router) {
    this.logoFeelMe='/assets/img/logo.png';
    this.SloganFeelMe='/assets/img/logo2.png';
    this.banner1='/assets/img/sliderHomepage/banner1.jpg';
    this.icono1='/assets/img/icons/box.png';
    this.icono2='/assets/img/icons/silence.png';
    this.icono3='/assets/img/icons/dinero.png';
    this.icono4='/assets/img/icons/whatsapp.png';
   }

  ngOnInit(): void {
  }

}
