import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remember-password',
  templateUrl: './remember-password.component.html',
  styleUrls: ['./remember-password.component.css'],
})
export class RememberPasswordComponent implements OnInit {
  backArrow: string;

  constructor() {
    this.backArrow = '/assets/img/icons/backArrow.png';
  }

  ngOnInit(): void {}
}
