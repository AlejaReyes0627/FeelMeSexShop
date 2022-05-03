import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionPagoComponent } from './seccion-pago.component';

describe('SeccionPagoComponent', () => {
  let component: SeccionPagoComponent;
  let fixture: ComponentFixture<SeccionPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
