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
  nombre: string;
  correo: string;
  mensaje: string;

  constructor() {
    this.whatsappIcon = '/assets/img/icons/whatsappIcon.png';
    this.gmailIcon = '/assets/img/icons/gmail_icon.png';
    this.correo = '';
    this.nombre = '';
    this.mensaje = '';
  }

  ngOnInit(): void {}
  enviarMensaje() {

    Swal.fire({
      title: 'Gracias por tu comentario !',
      text: 'Tomaremos en cuenta tu opinión!',
      icon: 'success',
      confirmButtonText: 'Ok',
    });
    

  }
}
