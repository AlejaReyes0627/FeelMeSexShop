import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroJuegosComponent } from './filtro-juegos.component';

describe('FiltroJuegosComponent', () => {
  let component: FiltroJuegosComponent;
  let fixture: ComponentFixture<FiltroJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroJuegosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
