import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroParejasComponent } from './filtro-parejas.component';

describe('FiltroParejasComponent', () => {
  let component: FiltroParejasComponent;
  let fixture: ComponentFixture<FiltroParejasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroParejasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroParejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
