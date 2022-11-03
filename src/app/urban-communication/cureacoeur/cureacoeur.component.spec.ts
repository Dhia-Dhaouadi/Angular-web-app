import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CureacoeurComponent } from './cureacoeur.component';

describe('CureacoeurComponent', () => {
  let component: CureacoeurComponent;
  let fixture: ComponentFixture<CureacoeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CureacoeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CureacoeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
