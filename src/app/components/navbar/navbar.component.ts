import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logoFeelMe:string;
  iconcarrito:string;
  SloganFeelMe:string;

  constructor() {
    this.logoFeelMe='/assets/img/logo.png';
    this.SloganFeelMe='/assets/img/logo2.png';
    this.iconcarrito='/assets/img/icons/carrito.ico';
   }

  ngOnInit(): void {
  }

}
