import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroOtrosComponent } from './filtro-otros.component';

describe('FiltroOtrosComponent', () => {
  let component: FiltroOtrosComponent;
  let fixture: ComponentFixture<FiltroOtrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroOtrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroOtrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
