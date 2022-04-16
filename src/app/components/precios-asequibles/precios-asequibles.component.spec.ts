import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosAsequiblesComponent } from './precios-asequibles.component';

describe('PreciosAsequiblesComponent', () => {
  let component: PreciosAsequiblesComponent;
  let fixture: ComponentFixture<PreciosAsequiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreciosAsequiblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreciosAsequiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
