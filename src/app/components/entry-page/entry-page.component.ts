import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entry-page',
  templateUrl: './entry-page.component.html',
  styleUrls: ['./entry-page.component.css'],
})
export class EntryPageComponent implements OnInit {
  logoFeelMe: string;
  SloganFeelMe: string;
  dia: number;
  mes: number;
  anio: number;

  constructor(private router: Router) {
    this.logoFeelMe = '/assets/img/logo.png';
    this.SloganFeelMe = '/assets/img/logo2.png';
    this.dia = 0;
    this.mes = 0;
    this.anio = 0;
  }
  ngOnInit(): void {}

  validacionFecha() {
    /* Calcula y concatena la fecha actual */

    if (this.dia <= 0 || this.mes <= 0 || this.anio <= 0) {
      Swal.fire({
        title: 'Denegación!',
        text: 'Los Valores Deben Ser Iguales o Mayores Que Uno',
        icon: 'warning',
        confirmButtonText: 'Ok',
      });
      this.router.navigate(['/']);
      return;
    }

    let hoy = new Date();

    let fechaACalcular = new Date(this.anio, this.mes - 1, this.dia);

    let edad = hoy.getFullYear() - fechaACalcular.getFullYear();
    let mes = hoy.getMonth() - fechaACalcular.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaACalcular.getDate())) {
      edad--;
    }

    /* Entrada */
    if (edad >= 18) {
      this.router.navigate(['/login']);
    } else {
      Swal.fire({
        title: 'Denegación!',
        text: 'Eres Menor De Edad Y No Puedes Ingresar A Esta Pagina!',
        icon: 'warning',
        confirmButtonText: 'Ok',
      });
      this.router.navigate(['/']);
    }
  }
}
