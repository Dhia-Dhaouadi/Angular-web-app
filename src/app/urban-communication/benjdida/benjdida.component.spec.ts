import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenjdidaComponent } from './benjdida.component';

describe('BenjdidaComponent', () => {
  let component: BenjdidaComponent;
  let fixture: ComponentFixture<BenjdidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenjdidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenjdidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
