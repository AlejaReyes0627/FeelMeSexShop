import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SexshopdatabaseService } from 'src/app/sexshopdatabase.service';
import Swal from 'sweetalert2';
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
  listaGenerica: Producto[] = [];
  listaproductosSeleccionados: Producto[] = [];
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
    console.log("Entrando data:", this.listaproductosSeleccionados);

  }

  productosOfertaVibradores() {
    var tipo = 'select';
    var sql = 'SELECT * FROM producto WHERE idCategoria=4 ORDER BY precio ASC  LIMIT 3;';

    this.listaProductosVibradores = [];

    this.sexshopService.llamadoHttp(tipo, sql).subscribe((data: any) => {
      if (data.success == true) {
        for (let i in data.mensaje) {
          this.listaProductosVibradores.push(data.mensaje[i]);
          this.listaGenerica.push(data.mensaje[i]);
        }
      }
    });

  }
  productosOfertaLenceria() {
    var tipo = 'select';
    var sql = 'SELECT * FROM producto WHERE idCategoria=6 ORDER BY precio ASC  LIMIT 3;';

    this.listaProductosLenceria = [];

    this.sexshopService.llamadoHttp(tipo, sql).subscribe((data: any) => {
      if (data.success == true) {
        for (let i in data.mensaje) {
          this.listaProductosLenceria.push(data.mensaje[i]);
          this.listaGenerica.push(data.mensaje[i]);
        }
      }
    });

  }
  /*productosOfertaOtros() {
    var tipo = 'select';
    var sql = 'SELECT * FROM producto WHERE precio <= 120000 AND idCategoria=8;';

    this.listaProductosGenericos = [];

    this.sexshopService.llamadoHttp(tipo, sql).subscribe((data: any) => {
      if (data.success == true) {
        for (let i in data.mensaje) {
          this.listaProductosGenericos.push(data.mensaje[i]);
        }
      }
    });
  }*/

  public encontrarproducto(id: number) {
    for (let i = 0; i < this.listaGenerica.length; i++) {
      const element = this.listaGenerica[i];
      if (element.idProducto == id) {
        return element;
      }
    }
    return null;
  }
  public seleccionarProducto(id: number) {
    console.log(id);
    var producto = this.encontrarproducto(id);
    if (producto != null) {
      this.listaproductosSeleccionados.push(producto);
      localStorage.setItem('localProducts', JSON.stringify((this.listaproductosSeleccionados)));
      Swal.fire({
        title: 'Éxito!',
        text: 'Se ha añadido al carrito con exito!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
    }
    console.log(this.listaproductosSeleccionados);
  }

  estaSeleccionado(id: number) {
    for (let i = 0; i < this.listaproductosSeleccionados.length; i++) {
      const element = this.listaproductosSeleccionados[i];
      if (element.idProducto == id) {
        return i;
      }
    }
    return null;
  }



  public deseleccionarProducto(id: number) {
    console.log(id);
    var i = this.estaSeleccionado(id);
    if (i != null) {
      this.listaproductosSeleccionados.splice(i, 1);
    }
  }


}
