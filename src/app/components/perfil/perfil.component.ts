import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  iconUser: string;
  backArrow: string;

  constructor() {
    this.iconUser = '/assets/img/icons/user.png';
    this.backArrow = '/assets/img/icons/backArrow.png';
  }

  ngOnInit(): void {}
}
