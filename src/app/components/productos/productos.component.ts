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
  listaProductos: Producto[] = [];

  constructor(http: HttpClient) {
    this.prueba1 = '/assets/img/pruebas/prueba5.jpg';
    this.prueba2 = '/assets/img/pruebas/prueba1.jpg';
    this.sexShopService = new SexshopdatabaseService(http);
  }

  ngOnInit(): void {
    this.mostrarProductos();
  }

  mostrarProductos() {
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
}
