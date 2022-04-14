import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confidencialidad',
  templateUrl: './confidencialidad.component.html',
  styleUrls: ['./confidencialidad.component.css']
})
export class ConfidencialidadComponent implements OnInit {
  confImagen: string;

  constructor() {
    this.confImagen = '/assets/img/confidencialidad/confidencialidadImg.jpg';
   }

  ngOnInit(): void {
  }

}
