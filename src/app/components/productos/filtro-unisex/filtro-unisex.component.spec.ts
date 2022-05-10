import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroUnisexComponent } from './filtro-unisex.component';

describe('FiltroUnisexComponent', () => {
  let component: FiltroUnisexComponent;
  let fixture: ComponentFixture<FiltroUnisexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroUnisexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroUnisexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
