import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtencionOportunaComponent } from './atencion-oportuna.component';

describe('AtencionOportunaComponent', () => {
  let component: AtencionOportunaComponent;
  let fixture: ComponentFixture<AtencionOportunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtencionOportunaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtencionOportunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
