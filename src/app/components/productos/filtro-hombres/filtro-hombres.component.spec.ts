import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroHombresComponent } from './filtro-hombres.component';

describe('FiltroHombresComponent', () => {
  let component: FiltroHombresComponent;
  let fixture: ComponentFixture<FiltroHombresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroHombresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroHombresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
