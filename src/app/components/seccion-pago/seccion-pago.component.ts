import { Component, OnInit } from '@angular/core';
import { SexshopdatabaseService } from 'src/app/sexshopdatabase.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seccion-pago',
  templateUrl: './seccion-pago.component.html',
  styleUrls: ['./seccion-pago.component.css'],
})
export class SeccionPagoComponent implements OnInit {
  title = 'zoo';
  mercadoPago: String;
  transferencia: String;
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
  metodoDePago: String;

  constructor(http: HttpClient) {
    this.sexShopService = new SexshopdatabaseService(http);
    this.mercadoPago = '/assets/img/seccion-pago/mercadoPago.png';
    this.transferencia = '/assets/img/seccion-pago/Bancolombia-nequi.png'
    this.nombres = '';
    this.apellidos = '';
    this.email = '';
    this.direccion = '';
    this.direccion2 = '';
    this.departamento = '';
    this.ciudad = '';
    this.codigoPostal = '';
    this.telefono = '';
    this.estado = '';
    this.transportadora = '';
    this.metodoDePago = '';
  }

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
          if (correo == usuarioCorreo) {
            var nombreInput = document.getElementById('nombres');
            nombreInput?.setAttribute('value', nombre);

            var apellidoInput = document.getElementById('apellidos');
            apellidoInput?.setAttribute('value', apellido);

            var correoInput = document.getElementById('correo');
            correoInput?.setAttribute('value', correo);
          }
        }
      }
    });
  }
}
