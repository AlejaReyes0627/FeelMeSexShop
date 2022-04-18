import { Component, OnInit } from '@angular/core';
import { SexshopdatabaseService } from 'src/app/sexshopdatabase.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-persona',
  templateUrl: './registro-persona.component.html',
  styleUrls: ['./registro-persona.component.css']
})
export class RegistroPersonaComponent implements OnInit {
  title = 'zooUnibague';
  sexshopdb: SexshopdatabaseService;
  email: String;
  contrasena: String;

  constructor(http: HttpClient, private router: Router) {
    this.email = ""; 
    this.contrasena = ""; 
    this.sexshopdb = new SexshopdatabaseService(http)
  }

  ngOnInit(): void {
  }

  insertarprueba() {
    var tipo = "insert";
    var sql = "INSERT INTO pruebaALEJA VALUES('" + this.email + "','" + this.contrasena + "');";
    this.sexshopdb.llamadoHttp(tipo, sql).subscribe((data: any) => {
      if (data.success == true) {
        Swal.fire({
          title: 'Éxito!',
          text: "Ha ingresado con éxito!",
          icon: 'success',
          confirmButtonText: 'Ok',
        });
        this.router.navigate(['/productos']);



      } else {
        Swal.fire({
          title: 'Error!',
          text: "Al parecer este usuario no está registrado o ingresó mal los datos!",
          icon: 'warning',
          confirmButtonText: 'Ok',
          footer: 'Esta informacion es importante'
        });
        this.router.navigate(['/registro-persona']);

      }
    });
  }
}
