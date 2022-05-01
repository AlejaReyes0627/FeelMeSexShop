import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SexshopdatabaseService } from 'src/app/sexshopdatabase.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title = 'zoo';
  sexShopService: SexshopdatabaseService;
  contrasena: String;
  email: String;

  constructor(http: HttpClient, private router: Router) {
    this.contrasena = '';
    this.email = '';
    this.sexShopService = new SexshopdatabaseService(http);
  }
  ngOnInit(): void {}

  mostrarcontrasena() {
    var tipo = document.getElementById('password');
    if (tipo?.getAttribute('type') == 'password') {
      tipo?.setAttribute('type', 'text');
    } else {
      tipo?.setAttribute('type', 'password');
    }
  }

  onLogin() {
    if (
      this.email.includes('@') == false ||
      this.email.includes('.') == false
    ) {
      Swal.fire({
        title: 'Error',
        text: 'Ingrese una cuenta de correo válida',
        icon: 'warning',
        confirmButtonText: 'Ok',
      });
      return;
    } else {
      var tipo = 'select';
      var sql =
        "select * from usuario where contraseña='" +
        this.contrasena +
        "' and correo='" +
        this.email.toLowerCase() +
        "';";
      this.sexShopService.llamadoHttp(tipo, sql).subscribe((data: any) => {
        if (data.success == true) {
          for (let i in data.mensaje) {
            var contra = data.mensaje[0].contraseña;
            var email = data.mensaje[0].correo;
            if (contra == this.contrasena && email == this.email) {
              this.sexShopService.setUsuarioLogeado(data.mensaje[0].correo);
              localStorage.setItem('usuario', data.mensaje[0].correo);
              Swal.fire({
                title: 'Éxito!',
                text: 'Has ingresado con éxito, disfruta del placer!',
                icon: 'success',
                confirmButtonText: 'Ok',
              });
              var usuairo = localStorage.getItem('usuario');
              console.log(usuairo);
              this.router.navigate(['/inicio']);
            } else {
              this.sexShopService.setUsuarioLogeado(null);
              Swal.fire({
                title: 'Error!',
                text: 'El usuario no se encuentra registrado',
                icon: 'warning',
                confirmButtonText: 'Ok',
                footer: 'Esta informacion es importante',
              });
              this.router.navigate(['/login']);
            }
          }
        }
      });
    }
  }
}
