import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsinecentraleComponent } from './usinecentrale.component';

describe('UsinecentraleComponent', () => {
  let component: UsinecentraleComponent;
  let fixture: ComponentFixture<UsinecentraleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsinecentraleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsinecentraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
