import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroMujeresComponent } from './filtro-mujeres.component';

describe('FiltroMujeresComponent', () => {
  let component: FiltroMujeresComponent;
  let fixture: ComponentFixture<FiltroMujeresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroMujeresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroMujeresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
