import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SexshopdatabaseService } from 'src/app/sexshopdatabase.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{
  sexshopService:SexshopdatabaseService;
  facebookIcon:string;
  instagramIcon:string;
  twitterIcon:string;
  whatsappIcon:string;
  
  constructor(public router: Router, http:HttpClient) 
  {
    this.sexshopService = new SexshopdatabaseService(http);
    this.facebookIcon='/assets/img/icons/facebookIcon.png';
    this.instagramIcon='/assets/img/icons/instagramIcon.png';
    this.twitterIcon='/assets/img/icons/twitterIcon.png';
    this.whatsappIcon='/assets/img/icons/whatsappIcon.png';
   }
   navigate_envios(): void { 
    this.router.navigate(['/envios']);
    }
}
