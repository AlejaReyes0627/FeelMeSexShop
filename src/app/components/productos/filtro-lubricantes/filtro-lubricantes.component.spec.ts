import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroLubricantesComponent } from './filtro-lubricantes.component';

describe('FiltroLubricantesComponent', () => {
  let component: FiltroLubricantesComponent;
  let fixture: ComponentFixture<FiltroLubricantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroLubricantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroLubricantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
