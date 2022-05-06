import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  whatsappIcon: string;
  gmailIcon: string;
  nombre: String;
  correo: String;
  mensaje: String;

  constructor() {
    this.whatsappIcon = '/assets/img/icons/whatsappIcon.png';
    this.gmailIcon = '/assets/img/icons/gmail_icon.png';
    this.correo = '';
    this.nombre = '';
    this.mensaje = '';
  }

  ngOnInit(): void {}
  enviarMensaje() {
    if (this.correo == '' || this.nombre == '' || this.mensaje == '') {
      Swal.fire({
        title: 'Error',
        text: 'Debe digitar todos lo campos !',
        icon: 'warning',
        confirmButtonText: 'Ok',
      });

      return;
    }
    if (
      this.correo.includes('@') == false ||
      this.correo.includes('.') == false
    ) {
      Swal.fire({
        title: 'Error',
        text: 'Ingrese una cuenta de correo válida',
        icon: 'warning',
        confirmButtonText: 'Ok',
      });

      return;
    }

    Swal.fire({
      title: 'Gracias por tu comentario !',
      text: 'Tomaremos en cuenta tu opinión!',
      icon: 'success',
      confirmButtonText: 'Ok',
    });
    this.nombre = '';
    this.correo = '';
    this.mensaje = '';
  }
}
