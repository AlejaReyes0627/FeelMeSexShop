import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SexshopdatabaseService } from './sexshopdatabase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FeelMeSexShop';
  respuesta:any;
  sexShopservice:SexshopdatabaseService;

constructor(http:HttpClient, private router: Router)
{
  this.sexShopservice = new SexshopdatabaseService(http);
}
ngOnInit(){

}

//metodo de ejemplo para usar webservice
llamadoEjemplo(){
  //se declara la variable tipo, que contiene el tipo de script que se le dara al webservice
  var tipo = "select";

  //se declara la variable el script, que contiene el tipo de script que 
  //se le dara al webservice
  var sql = "select * from prueba";

  //se llama al metodo llamadoHttp del objeto zooService y se le entregam las 
  //varibles tipo y sql
  this.sexShopservice.llamadoHttp( tipo, sql ).subscribe(  //el subscribe hace que se espere respuesta
    (data: any) => {  //data es todo lo que devuelve como respuesta el llamado al webservice
      console.log(data); // se usan los datos ( en este caso se muestra la res. en la consola del navegador)
      
      if(data.success == true){ //valida si el webservide me responde de manera correcta
        console.log(data.mensaje[0]); //si me repondio true en success, muestro en consola el primer dato
      }
      else{
        console.log("hubo false en webservice");//si me resspondio fale hubo algo mal en el webservice
      }
    },
    (error:any) => { //si hubo algun error en el llamado se guarda aqui en error
      console.log(error); //si hubo error se ejecuta este codigo y no el de arriba de data(en este caso se mostraria el error en consola)
    }
  );
}

}
