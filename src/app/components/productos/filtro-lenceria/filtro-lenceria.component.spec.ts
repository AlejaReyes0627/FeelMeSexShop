import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroLenceriaComponent } from './filtro-lenceria.component';

describe('FiltroLenceriaComponent', () => {
  let component: FiltroLenceriaComponent;
  let fixture: ComponentFixture<FiltroLenceriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroLenceriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroLenceriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
