import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SexshopdatabaseService } from 'src/app/sexshopdatabase.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css',
'./normalize.css']
})
export class MenuComponent{
  sexshopService:SexshopdatabaseService;
  logoFeelMe:string;
  iconcarrito:string;
  SloganFeelMe:string;
  banner1:string;
  banner2: string;
  icono1:string;
  icono2:string;
  icono3:string;
  icono4:string;
  prueba1:string;
  prueba2:string;
  informacion1:string;
  informacion2:string;
  informacion3:string;
  informacion4:string;
  informacion5:string;
  informacion6:string;
  metodo_pago1:string;
  metodo_pago2:string;
  metodo_pago3:string;
  metodo_pago4:string;
  metodo_pago5:string;
  metodo_pago6:string;
  metodo_pago7:string;
  metodo_pago8:string;
  metodo_pago9:string;


  constructor(public router: Router, http:HttpClient) 
  {
    this.sexshopService = new SexshopdatabaseService(http);
    this.logoFeelMe='/assets/img/logo.png';
    this.SloganFeelMe='/assets/img/logo2.png';
    this.iconcarrito='/assets/img/icons/carrito.ico';
    this.banner1='/assets/img/sliderHomepage/banner1.jpg';
    this.banner2='/assets/img/sliderHomepage/banner2.jpg';
    this.icono1='/assets/img/icons/box.png';
    this.icono2='/assets/img/icons/silence.png';
    this.icono3='/assets/img/icons/dinero.png';
    this.icono4='/assets/img/icons/whatsapp.png';
    this.prueba1='/assets/img/pruebas/prueba5.jpg';
    this.prueba2='/assets/img/pruebas/prueba1.jpg';
    this.informacion1='/assets/img/information/information1.jpg';
    this.informacion2='/assets/img/information/information2.jpg';
    this.informacion3='/assets/img/information/information3.jpg';
    this.informacion4='/assets/img/information/information4.jpg';
    this.informacion5='/assets/img/information/information5.jpg';
    this.informacion6='/assets/img/information/information6.jpg';
    this.metodo_pago1='/assets/img/paidMethod/metodo_pago1.png';
    this.metodo_pago2='/assets/img/paidMethod/metodo_pago2.png';
    this.metodo_pago3='/assets/img/paidMethod/metodo_pago3.png';
    this.metodo_pago4='/assets/img/paidMethod/metodo_pago4.png';
    this.metodo_pago5='/assets/img/paidMethod/metodo_pago5.png';
    this.metodo_pago6='/assets/img/paidMethod/metodo_pago6.png';
    this.metodo_pago7='/assets/img/paidMethod/metodo_pago7.png';
    this.metodo_pago8='/assets/img/paidMethod/metodo_pago8.png';
    this.metodo_pago9='/assets/img/paidMethod/metodo_pago9.png';
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
