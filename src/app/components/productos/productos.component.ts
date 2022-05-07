import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SexshopdatabaseService } from 'src/app/sexshopdatabase.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

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
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  title = 'zoo';
  sexShopService: SexshopdatabaseService;
  prueba1: string;
  prueba2: string;
  tipoProductos: number;
  listaProductos: Producto[] = [];

  constructor(http: HttpClient) {
    this.prueba1 = '/assets/img/pruebas/prueba5.jpg';
    this.prueba2 = '/assets/img/pruebas/prueba1.jpg';
    this.sexShopService = new SexshopdatabaseService(http);
    this.tipoProductos = 0;
  }

  ngOnInit(): void {
    this.mostrarProductos();
  }

  public mostrarProductos() {
    var tipo = 'select';
    var sql = 'SELECT * FROM producto';

    this.listaProductos = [];

    this.sexShopService.llamadoHttp(tipo, sql).subscribe((data: any) => {
      if (data.success == true) {
        for (let i in data.mensaje) {
          this.listaProductos.push(data.mensaje[i]);
        }
      }
    });
  }

  public mostrarProductosMujeres() {
    var tipo = 'select';
    var sql = 'SELECT * FROM producto WHERE idCategoria =3';

    this.listaProductos = [];

    this.sexShopService.llamadoHttp(tipo, sql).subscribe((data: any) => {
      if (data.success == true) {
        for (let i in data.mensaje) {
          this.listaProductos.push(data.mensaje[i]);
        }
      }
    });
  }
  public mostrarProductosHombres() {
    var tipo = 'select';
    var sql = 'SELECT * FROM producto WHERE idCategoria =2';

    this.listaProductos = [];

    this.sexShopService.llamadoHttp(tipo, sql).subscribe((data: any) => {
      if (data.success == true) {
        for (let i in data.mensaje) {
          this.listaProductos.push(data.mensaje[i]);
        }
      }
    });
  }
  public mostrarProductosParejas() {
    var tipo = 'select';
    var sql = 'SELECT * FROM producto WHERE idCategoria =9';

    this.listaProductos = [];

    this.sexShopService.llamadoHttp(tipo, sql).subscribe((data: any) => {
      if (data.success == true) {
        for (let i in data.mensaje) {
          this.listaProductos.push(data.mensaje[i]);
        }
      }
    });
  }
  public  mostrarProductosUnisex() {
    var tipo = 'select';
    var sql = 'SELECT * FROM producto WHERE idCategoria =1';

    this.listaProductos = [];

    this.sexShopService.llamadoHttp(tipo, sql).subscribe((data: any) => {
      if (data.success == true) {
        for (let i in data.mensaje) {
          this.listaProductos.push(data.mensaje[i]);
        }
      }
    });
  }
  public mostrarProductosVibradores() {
    var tipo = 'select';
    var sql = 'SELECT * FROM producto WHERE idCategoria =4';

    this.listaProductos = [];

    this.sexShopService.llamadoHttp(tipo, sql).subscribe((data: any) => {
      if (data.success == true) {
        for (let i in data.mensaje) {
          this.listaProductos.push(data.mensaje[i]);
        }
      }
    });
  }
  public mostrarProductosJuegos() {
    var tipo = 'select';
    var sql = 'SELECT * FROM producto WHERE idCategoria =5';

    this.listaProductos = [];

    this.sexShopService.llamadoHttp(tipo, sql).subscribe((data: any) => {
      if (data.success == true) {
        for (let i in data.mensaje) {
          this.listaProductos.push(data.mensaje[i]);
        }
      }
    });
  }
  public mostrarProductosLenceria() {
    var tipo = 'select';
    var sql = 'SELECT * FROM producto WHERE idCategoria =6';

    this.listaProductos = [];

    this.sexShopService.llamadoHttp(tipo, sql).subscribe((data: any) => {
      if (data.success == true) {
        for (let i in data.mensaje) {
          this.listaProductos.push(data.mensaje[i]);
        }
      }
    });
  }
  public mostrarProductosLubricantes() {
    var tipo = 'select';
    var sql = 'SELECT * FROM producto WHERE idCategoria =7';

    this.listaProductos = [];

    this.sexShopService.llamadoHttp(tipo, sql).subscribe((data: any) => {
      if (data.success == true) {
        for (let i in data.mensaje) {
          this.listaProductos.push(data.mensaje[i]);
        }
      }
    });
  }
  public mostrarProductosOtros() {
    var tipo = 'select';
    var sql = 'SELECT * FROM producto WHERE idCategoria =8';

    this.listaProductos = [];

    this.sexShopService.llamadoHttp(tipo, sql).subscribe((data: any) => {
      if (data.success == true) {
        for (let i in data.mensaje) {
          this.listaProductos.push(data.mensaje[i]);
        }
      }
    });
  }
  public mostrarProductosAscendente() {
    var tipo = 'select';
    var sql = 'SELECT * FROM producto ORDER BY precio;';

    this.listaProductos = [];

    this.sexShopService.llamadoHttp(tipo, sql).subscribe((data: any) => {
      if (data.success == true) {
        for (let i in data.mensaje) {
          this.listaProductos.push(data.mensaje[i]);
        }
      }
    });
  }
  public mostrarProductosDescendente() {
    var tipo = 'select';
    var sql = 'SELECT * FROM producto ORDER BY precio DESC;';

    this.listaProductos = [];

    this.sexShopService.llamadoHttp(tipo, sql).subscribe((data: any) => {
      if (data.success == true) {
        for (let i in data.mensaje) {
          this.listaProductos.push(data.mensaje[i]);
        }
      }
    });
  }
}
