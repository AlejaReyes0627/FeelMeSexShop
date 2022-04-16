import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atencion-oportuna',
  templateUrl: './atencion-oportuna.component.html',
  styleUrls: ['./atencion-oportuna.component.css'],
})
export class AtencionOportunaComponent implements OnInit {
  atencionOportuna: string;

  constructor() {
    this.atencionOportuna = '/assets/img/atencionOportuna/atencionOportuna.jpg';
  }

  ngOnInit(): void {}
}
