import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SexshopdatabaseService } from 'src/app/sexshopdatabase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  sexshopService: SexshopdatabaseService;
  logoFeelMe: string;
  iconcarrito: string;
  iconUser: string;
  SloganFeelMe: string;
  constructor(public router: Router, http: HttpClient) {
    this.sexshopService = new SexshopdatabaseService(http);
    this.logoFeelMe = '/assets/img/logo.png';
    this.SloganFeelMe = '/assets/img/logo2.png';
    this.iconcarrito = '/assets/img/icons/carrito.ico';
    this.iconUser = '/assets/img/icons/user.png';
    
  }

  ngOnInit(): void {}
  insertarprueba() {
    var tipo = 'delete';
    var sql = 'DELETE FROM persona';
    this.sexshopService.llamadoHttp(tipo, sql).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }


  cerrarSesion()
  {
    localStorage.removeItem('usuario')
  }
}
