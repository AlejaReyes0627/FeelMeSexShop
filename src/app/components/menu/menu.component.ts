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
  iconcarrito:string;
  SloganFeelMe:string;
  banner1:string;
  icono1:string;
  icono2:string;
  icono3:string;
  icono4:string;
  prueba1:string;
  prueba2:string;
  informacion1:string;
  informacion2:string;
  informacion3:string;
  informacion4:string;
  informacion5:string;
  informacion6:string;


  constructor(public router: Router) {
    this.logoFeelMe='/assets/img/logo.png';
    this.SloganFeelMe='/assets/img/logo2.png';
    this.iconcarrito='/assets/img/icons/carrito.ico';
    this.banner1='/assets/img/sliderHomepage/banner1.jpg';
    this.icono1='/assets/img/icons/box.png';
    this.icono2='/assets/img/icons/silence.png';
    this.icono3='/assets/img/icons/dinero.png';
    this.icono4='/assets/img/icons/whatsapp.png';
    this.prueba1='/assets/img/pruebas/prueba5.jpg';
    this.prueba2='/assets/img/pruebas/prueba1.jpg';
    this.informacion1='/assets/img/information/information1.jpg';
    this.informacion2='/assets/img/information/information2.jpg';
    this.informacion3='/assets/img/information/information3.jpg';
    this.informacion4='/assets/img/information/information4.jpg';
    this.informacion5='/assets/img/information/information5.jpg';
    this.informacion6='/assets/img/information/information6.jpg';
   }

  ngOnInit(): void {
  }

}
