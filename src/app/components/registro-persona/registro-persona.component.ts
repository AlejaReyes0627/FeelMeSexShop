import { Component, OnInit } from '@angular/core';
import { SexshopdatabaseService } from 'src/app/sexshopdatabase.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-persona',
  templateUrl: './registro-persona.component.html',
  styleUrls: ['./registro-persona.component.css'],
})
export class RegistroPersonaComponent implements OnInit {
  title = 'zoo';
  sexShopService: SexshopdatabaseService;
  nombre: String;
  apellido: String;
  emailRegister: String;
  contrasenaRegister: String;
  confirmarContrasena: String;
  genero: String;

  constructor(http: HttpClient, private router: Router) {
    this.nombre = '';
    this.apellido = '';
    this.emailRegister = '';
    this.contrasenaRegister = '';
    this.confirmarContrasena = '';
    this.genero = '';
    this.sexShopService = new SexshopdatabaseService(http);
  }

  ngOnInit(): void {}
  mostrarcontrasenaRegistro() {
    var tipo = document.getElementById('contrasena_registro');
    if (tipo?.getAttribute('type') == 'password') {
      tipo?.setAttribute('type', 'text');
    } else {
      tipo?.setAttribute('type', 'password');
    }
    var tipo = document.getElementById('confirmar_contraseña');
    if (tipo?.getAttribute('type') == 'password') {
      tipo?.setAttribute('type', 'text');
    } else {
      tipo?.setAttribute('type', 'password');
    }
  }

  insertarPerona() {
    if (
      this.nombre == '' ||
      this.apellido == '' ||
      this.emailRegister == '' ||
      this.contrasenaRegister == '' ||
      this.confirmarContrasena == '' ||
      this.genero == ''
    ) {
      Swal.fire({
        title: 'Error!',
        text: 'Debe digitar todos los campos',
        icon: 'warning',
        confirmButtonText: 'Ok',
        footer: 'Esta informacion es importante',
      });
      this.router.navigate(['/registro-persona']);
      return;
    }

    if (
      this.emailRegister.includes('@') == false ||
      this.emailRegister.includes('.') == false
    ) {
      Swal.fire({
        title: 'Error',
        text: 'Ingrese una cuenta de correo válida',
        icon: 'warning',
        confirmButtonText: 'Ok',
      });
      this.router.navigate(['/registro-persona']);
      return;
    }
    if (this.contrasenaRegister !== this.confirmarContrasena) {
      Swal.fire({
        title: 'Error',
        text: 'Las contraseñas no coinciden',
        icon: 'warning',
        confirmButtonText: 'Ok',
      });
      this.router.navigate(['/registro-persona']);
      return;
    }
    var tipo1 = 'select';
    var sql1 =
      "SELECT * FROM usuario where correo='" + this.emailRegister + "';";
    this.sexShopService.llamadoHttp(tipo1, sql1).subscribe((data: any) => {
      if (data.success == true) {
        for (let i in data.mensaje) {
          var correo = data.mensaje[0].correo;
          if (correo == this.emailRegister) {
            Swal.fire({
              title: 'Error',
              text: 'Ya existe un usuario registrado con este correo !',
              icon: 'warning',
              confirmButtonText: 'Ok',
            });
            this.router.navigate(['/registro-persona']);
            return;
          }
        }
      }
    });
    var tipo2 = 'insert';
    var sql2 =
      "INSERT INTO persona  (nombre, apellido, correo, contraseña, genero, fechaNacimiento) VALUES('" +
      this.nombre +
      "','" +
      this.apellido +
      "','" +
      this.emailRegister +
      "','" +
      this.confirmarContrasena +
      "','" +
      this.genero +
      "','" +
      '2002-02-18' +
      "');";
    this.sexShopService.llamadoHttp(tipo2, sql2).subscribe((data: any) => {
      if (data.success == true) {
        Swal.fire({
          title: 'Éxito!',
          text: 'Sus datos han sido registrado con exito!',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
      }
    });
    var tipo3 = 'insert';
    var sql3 =
      "INSERT INTO usuario(correo, contraseña) VALUES('" +
      this.emailRegister +
      "','" +
      this.confirmarContrasena +
      "');";
    console.log(sql3);
    
    this.sexShopService.llamadoHttp(tipo3, sql3).subscribe((data: any) => {
      if (data.success == true) {
        Swal.fire({
          title: 'Éxito!',
          text: 'Su  usuario ha sido registrado en Feel Me SexShop !',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
        this.router.navigate(['/inicio']);
      }
    });
  }
}



