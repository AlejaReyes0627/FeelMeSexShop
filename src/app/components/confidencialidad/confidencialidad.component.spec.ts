import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidencialidadComponent } from './confidencialidad.component';

describe('ConfidencialidadComponent', () => {
  let component: ConfidencialidadComponent;
  let fixture: ComponentFixture<ConfidencialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfidencialidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfidencialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
