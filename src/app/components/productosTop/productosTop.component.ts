import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SexshopdatabaseService } from 'src/app/sexshopdatabase.service';
@Component({
  selector: 'app-productos-top',
  templateUrl: './productosTop.component.html',
  styleUrls: ['./productosTop.component.css']
})
export class ProductosTopComponent implements OnInit {
  sexshopService:SexshopdatabaseService;
  logoFeelMe:string;
  iconcarrito:string;
  SloganFeelMe:string;
  prueba1:string;
  prueba2:string;
  constructor(public router: Router, http:HttpClient) {this.sexshopService = new SexshopdatabaseService(http);
    this.logoFeelMe='/assets/img/logo.png';
    this.SloganFeelMe='/assets/img/logo2.png';
    this.iconcarrito='/assets/img/icons/carrito.ico';
    this.prueba1='/assets/img/pruebas/prueba5.jpg';
    this.prueba2='/assets/img/pruebas/prueba1.jpg'; 
  }

  ngOnInit(): void {
  }
  insertarprueba()
   {
     var tipo="delete";
     var sql="DELETE FROM persona";
     this.sexshopService.llamadoHttp(tipo,sql).subscribe((data:any)=>{
       console.log(data);
     },(error: any) => {
      console.log(error);
    })

   }
}
