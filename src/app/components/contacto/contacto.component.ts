import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  
  
  whatsappIcon:string;
  gmailIcon:string;


  constructor() {
    
    this.whatsappIcon='/assets/img/icons/whatsappIcon.png';
    this.gmailIcon='/assets/img/icons/gmail_icon.png';
   }

  ngOnInit(): void {
  }

}
