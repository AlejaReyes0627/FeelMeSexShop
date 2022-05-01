import { Component, OnInit } from '@angular/core';
import { SexshopdatabaseService } from 'src/app/sexshopdatabase.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  iconUser: string;
  backArrow: string;
  title = 'zoo';
  sexShopService: SexshopdatabaseService;
 

  constructor(http: HttpClient, private router: Router) {
    this.iconUser = '/assets/img/icons/user.png';
    this.backArrow = '/assets/img/icons/backArrow.png';
    this.sexShopService = new SexshopdatabaseService(http);
  }

  ngOnInit(): void {
    this.obtenerInfo()
  }

  obtenerInfo(){

    var usuarioCorreo = localStorage.getItem('usuario');
    var tipo1 = 'select';
    var sql1 =
      "SELECT * FROM persona where correo='" + usuarioCorreo + "';";
    this.sexShopService.llamadoHttp(tipo1, sql1).subscribe((data: any) => {
      if (data.success == true) {
        for (let i in data.mensaje) {
          var nombre = data.mensaje[0].nombre;
          var apellido = data.mensaje[0].apellido;
          var correo = data.mensaje[0].correo;
          var contrasena =  data.mensaje[0].contraseña;
          var genero = data.mensaje[0].genero;
          var fechaNacimiento = data.mensaje[0].fechaNacimiento;
          if (correo == usuarioCorreo) {           
            var nombreInput = document.getElementById('nombre');
            nombreInput?.setAttribute('value', nombre);

            var apellidoInput = document.getElementById('apellido');
            apellidoInput?.setAttribute('value', apellido);

            var correoInput = document.getElementById('email');
            correoInput?.setAttribute('value', correo);

            var contrasenaInput = document.getElementById('contrasena');
            contrasenaInput?.setAttribute('value', contrasena);

            var generoInput = document.getElementById('genero');
            generoInput?.setAttribute('value', genero);

            var fechaNInput = document.getElementById('fechaN');
            fechaNInput?.setAttribute('value', fechaNacimiento);
          }
        }
      }
    });

  }
}
