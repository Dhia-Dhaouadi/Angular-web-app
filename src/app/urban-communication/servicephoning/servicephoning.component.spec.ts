import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicephoningComponent } from './servicephoning.component';

describe('ServicephoningComponent', () => {
  let component: ServicephoningComponent;
  let fixture: ComponentFixture<ServicephoningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicephoningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicephoningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
