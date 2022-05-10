import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroVibradoresComponent } from './filtro-vibradores.component';

describe('FiltroVibradoresComponent', () => {
  let component: FiltroVibradoresComponent;
  let fixture: ComponentFixture<FiltroVibradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroVibradoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroVibradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
