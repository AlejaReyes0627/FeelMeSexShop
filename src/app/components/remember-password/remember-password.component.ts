import { Component, OnInit } from '@angular/core';
import { SexshopdatabaseService } from 'src/app/sexshopdatabase.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-remember-password',
  templateUrl: './remember-password.component.html',
  styleUrls: ['./remember-password.component.css'],
})
export class RememberPasswordComponent implements OnInit {
  backArrow: string;
  title = 'zoo';
  sexShopService: SexshopdatabaseService;
  email: String;
  nuevaContrasena: String;
  confirmarContrasena: String;

  constructor(http: HttpClient, private router: Router) {
    this.backArrow = '/assets/img/icons/backArrow.png';
    this.sexShopService = new SexshopdatabaseService(http);
    this.email = '';
    this.nuevaContrasena = '';
    this.confirmarContrasena = '';
  }

  ngOnInit(): void {}

  cambiarContrasena() {
    if (
      this.email == '' ||
      this.nuevaContrasena == '' ||
      this.confirmarContrasena == ''
    ) {
      Swal.fire({
        title: 'Error!',
        text: 'Debe digitar todos los campos',
        icon: 'warning',
        confirmButtonText: 'Ok',
        footer: 'Esta informacion es importante',
      });
      this.router.navigate(['/remember-password']);
      return;
    }
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
      this.router.navigate(['/remember-password']);
      return;
    }
    if (this.nuevaContrasena !== this.confirmarContrasena) {
      Swal.fire({
        title: 'Error',
        text: 'Las contraseñas no coinciden',
        icon: 'warning',
        confirmButtonText: 'Ok',
      });
      this.router.navigate(['/remember-password']);
      return;
    }
    var tipo1 = 'update';
    var sql1 =
      "UPDATE persona SET contraseña='" +
      this.confirmarContrasena +
      "'" +
      "WHERE correo='" +
      this.email +
      "';";
    this.sexShopService.llamadoHttp(tipo1, sql1).subscribe((data: any) => {
      if (data.success == true) {
        Swal.fire({
          title: 'Exito',
          text: 'Su contraseña fue cambiada con exito !',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
        this.router.navigate(['/remember-password']);
        return;
      }
    });
  }
}
