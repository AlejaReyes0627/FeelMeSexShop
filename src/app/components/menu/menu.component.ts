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
  banner1:string

  constructor(public router: Router) {
    this.logoFeelMe='/assets/img/logo.png';
    this.SloganFeelMe='/assets/img/logo2.png';
    this.banner1='/assets/img/sliderHomepage/banner1.jpg';
   }

  ngOnInit(): void {
  }

}
