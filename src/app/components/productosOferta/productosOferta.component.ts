import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SexshopdatabaseService } from 'src/app/sexshopdatabase.service';
interface Producto {
  idProducto: number;
  nombreProducto: string;
  precio: number;
  descripcion: string;
  imagen: string;
  stock: number;
  idCategoria: number;
}

@Component({
  selector: 'app-productos-oferta',
  templateUrl: './productosOferta.component.html',
  styleUrls: ['./productosOferta.component.css'],
})
export class ProductosOfertaComponent implements OnInit {
  sexshopService: SexshopdatabaseService;
  logoFeelMe: string;
  iconcarrito: string;
  SloganFeelMe: string;
  prueba1: string;
  prueba2: string;
  listaProductosVibradores: Producto[] = [];
  listaProductosLenceria: Producto[] = [];
  listaProductosOtros: Producto[] = [];
  constructor(public router: Router, http: HttpClient) {
    this.sexshopService = new SexshopdatabaseService(http);
    this.logoFeelMe = '/assets/img/logo.png';
    this.SloganFeelMe = '/assets/img/logo2.png';
    this.iconcarrito = '/assets/img/icons/carrito.ico';
    this.prueba1 = '/assets/img/pruebas/prueba5.jpg';
    this.prueba2 = '/assets/img/pruebas/prueba1.jpg';
  }

  ngOnInit(): void {
    this.productosOfertaVibradores()
    this.productosOfertaLenceria()
  
  }

  productosOfertaVibradores(){
    var tipo = 'select';
    var sql = 'SELECT * FROM producto WHERE idCategoria=4 ORDER BY precio ASC  LIMIT 3;';

    this.listaProductosVibradores = [];

    this.sexshopService.llamadoHttp(tipo, sql).subscribe((data: any) => {
      if (data.success == true) {
        for (let i in data.mensaje) {
          this.listaProductosVibradores.push(data.mensaje[i]);
        }
      }
    });

  }
  productosOfertaLenceria(){
    var tipo = 'select';
    var sql = 'SELECT * FROM producto WHERE idCategoria=6 ORDER BY precio ASC  LIMIT 3;';

    this.listaProductosLenceria = [];

    this.sexshopService.llamadoHttp(tipo, sql).subscribe((data: any) => {
      if (data.success == true) {
        for (let i in data.mensaje) {
          this.listaProductosLenceria.push(data.mensaje[i]);
        }
      }
    });

  }
  productosOfertaOtros(){
    var tipo = 'select';
    var sql = 'SELECT * FROM producto WHERE precio <= 120000 AND idCategoria=8;';

    this.listaProductosOtros = [];

    this.sexshopService.llamadoHttp(tipo, sql).subscribe((data: any) => {
      if (data.success == true) {
        for (let i in data.mensaje) {
          this.listaProductosOtros.push(data.mensaje[i]);
        }
      }
    });

  }

  
}
