import { Component, OnInit } from '@angular/core';
import { SexshopdatabaseService } from 'src/app/sexshopdatabase.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { ProductosComponent } from '../productos/productos.component';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-seccion-pago',
  templateUrl: './seccion-pago.component.html',
  styleUrls: ['./seccion-pago.component.css'],
})
export class SeccionPagoComponent implements OnInit {
  title = 'zoo';
  imgMercadoPago: String;
  imgTransferencia: String;
  sexShopService: SexshopdatabaseService;
  nombres: String;
  apellidos: String;
  email: String;
  direccion: String;
  direccion2: String;
  departamento: String;
  ciudad: String;
  codigoPostal: String;
  telefono: String;
  estado: String;
  transportadora: String;
  numeroArticulos: number;
  subtotal: number;
  costoEnvio: number;
  metodoDePago: String;
  total: number;
  idPersonaPedido: number;
  loading: boolean = false;

  constructor(http: HttpClient) {
    this.sexShopService = new SexshopdatabaseService(http);
    this.imgMercadoPago = '/assets/img/seccion-pago/mercadoPago.png';
    this.imgTransferencia = '/assets/img/seccion-pago/Bancolombia-nequi.png';
    this.nombres = "";
    this.apellidos = '';
    this.email = '';
    this.direccion = '';
    this.direccion2 = '';
    this.departamento = '';
    this.ciudad = '';
    this.codigoPostal = '';
    this.telefono = '';
    this.estado = '';
    this.transportadora = '-';
    this.numeroArticulos = 0;
    this.subtotal = 0;
    this.costoEnvio = 0;
    this.metodoDePago = '-';
    this.total = 0;
    this.idPersonaPedido = 0;

  }

  public listaProductos: Array<any> = [];

  ngOnInit(): void {
    this.MostrarInfo();
  }
  MostrarInfo() {
    var usuarioCorreo = localStorage.getItem('usuario');
    var tipo1 = 'select';
    var sql1 = "SELECT * FROM persona where correo='" + usuarioCorreo + "';";
    this.sexShopService.llamadoHttp(tipo1, sql1).subscribe((data: any) => {
      if (data.success == true) {
        for (let i in data.mensaje) {
          var nombre = data.mensaje[0].nombre;
          var apellido = data.mensaje[0].apellido;
          var correo = data.mensaje[0].correo;
          var id = data.mensaje[0].idPersona;
          if (correo == usuarioCorreo) {
            this.nombres = nombre;
            this.apellidos = apellido;
            this.email = correo;
            this.idPersonaPedido = id;
          }
        }
      }
    });
  }

  sumarpreciosArray() {
    var storedList = localStorage.getItem('localProducts');
    let suma = 0;
    if (storedList == null) {
      this.listaProductos = []
    }
    else {

      this.listaProductos = JSON.parse(storedList);
      //console.log(this.listaProductos);
      for (let i = 0; i < this.listaProductos.length; i++) {
        //console.log(this.listaProductos[i].precio);
        suma += parseInt(this.listaProductos[i].precio);

      }
      //console.log(suma) 
      return suma;
    }
    return 0;
  }

  sumarCantidadesArray() {
    var storedList = localStorage.getItem('localProducts');
    let suma = 0;
    if (storedList == null) {
      this.listaProductos = []
    }
    else {

      this.listaProductos = JSON.parse(storedList);
      //console.log(this.listaProductos);
      for (let i = 0; i < this.listaProductos.length; i++) {
        //console.log(this.listaProductos[i]);
        suma = this.listaProductos.length;
        //console.log(this.listaProductos.length)
      }
      //console.log(suma) 
      return suma;
    }
    return 0;

  }

  mostrarResumen() {
    this.numeroArticulos = this.sumarCantidadesArray();
    this.subtotal = this.sumarpreciosArray()
    this.metodoDePago = (<HTMLInputElement>document.getElementById('metodo')).value;
    if ((<HTMLInputElement>document.getElementById('transportadora')).value == "Servientrega") {
      this.costoEnvio = 11000;
      this.total = this.sumarTotales();
      return true;
    }
    if ((<HTMLInputElement>document.getElementById('transportadora')).value == "Interapidisimo") {
      this.costoEnvio = 13000;
      this.total = this.sumarTotales();
    } 
    return false;
  }


  hacerPedido() {
    var mercadoPago = document.getElementById(
      'inlineRadio1'
    ) as HTMLInputElement | null;
    var transferencia = document.getElementById(
      'inlineRadio2'
    ) as HTMLInputElement | null;
    var contraEntrega = document.getElementById(
      'inlineRadio3'
    ) as HTMLInputElement | null;

    if (mercadoPago?.checked) {
      this.metodoDePago = 'Mercado Pago';
    }
    if (transferencia?.checked) {
      this.metodoDePago = 'Transferencia';
    }
    if (contraEntrega?.checked) {
      this.metodoDePago = 'Contra Entrega';
    }

    if (this.transportadora == "Servientrega") {
      this.costoEnvio = 11000;
    }
    if (this.transportadora == "Interapidisimo") {
      this.costoEnvio = 13000;
    }

    if (
      this.email == '' ||
      this.nombres == '' ||
      this.apellidos == '' ||
      this.direccion == '' ||
      this.departamento == '' ||
      this.ciudad == '' ||
      this.codigoPostal == '' ||
      this.telefono == '' ||
      this.transportadora == '-' ||
      this.metodoDePago == '-' ||
      this.costoEnvio == 0
    ) {
      Swal.fire({
        title: 'Error',
        text: 'Debe digitar todos lo campos !',
        icon: 'warning',
        confirmButtonText: 'Ok',
      });

      return;
    }



    var tipo2 = 'insert';
    var sql2 =
      'INSERT INTO pedido (fechaPedido, estado, transportadora, precioEnvio, metodoPago, costoTotal, personaId) VALUES(' +
      "'2002-02-18'" +
      ", 'En proceso'," +
      "'" +
      this.transportadora +
      "'," +
      this.costoEnvio +
      ",'" +
      this.metodoDePago +
      "'," +
      this.sumarTotales() +
      ',' +
      this.idPersonaPedido +
      ');';
    console.log(sql2);
    this.sexShopService.llamadoHttp(tipo2, sql2).subscribe((data: any) => {
      if (data.success == true) {
        Swal.fire({
          title: 'Éxito!',
          text: 'Se ha registrado su pedido con exito!',
          icon: 'success',
          confirmButtonText: 'Ok',
        });

      }
    });
  }

  public mostrarCarrito() {
    var storedList = localStorage.getItem('localProducts');
    if (storedList == null) {
      this.listaProductos = []
    }
    else {
      this.listaProductos = JSON.parse(storedList);
    }
    return this.listaProductos;
  }

  public encontrarproducto(id: number) {
    for (let i = 0; i < this.listaProductos.length; i++) {
      const element = this.listaProductos[i];
      if (element.idProducto == id) {
        return element;
      }
    }
    return null;
  }
  /*public seleccionarProducto(id:number)
  {
    console.log(id);
    var producto = this.encontrarproducto(id);
    localStorage.removeItem(String(id));
    
    /*if(producto != null)
    {
      if(localcosa == null)
    {
      this.listaProductos=[]
    }
    else{
      this.listaProductos = JSON.parse(localcosa);
      localStorage.removeItem(String(producto.idProducto-1));
    }
      //this.listaproductosSeleccionados.push(producto);
      //localStorage.removeItem(String(producto.idProducto), JSON.stringify((producto)));
    }

  }*/

  estaSeleccionado(id: number) {
    for (let i = 0; i < this.listaProductos.length; i++) {
      const element = this.listaProductos[i];
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
      this.listaProductos.splice(i, 1);
      localStorage.setItem('localProducts', JSON.stringify(this.listaProductos))
      Swal.fire({
        title: 'Exito!',
        text: 'Producto eliminado de la lista !',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
    }
  }
  sumarTotales() {
    let suma = 0;
    suma = this.sumarpreciosArray() + this.costoEnvio;
    console.log(suma);
    return suma;
  }
}
