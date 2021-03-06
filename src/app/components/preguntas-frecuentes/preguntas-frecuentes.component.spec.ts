import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes.component';

describe('PreguntasFrecuentesComponent', () => {
  let component: PreguntasFrecuentesComponent;
  let fixture: ComponentFixture<PreguntasFrecuentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreguntasFrecuentesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntasFrecuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
