import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiffservicesComponent } from './tiffservices.component';

describe('TiffservicesComponent', () => {
  let component: TiffservicesComponent;
  let fixture: ComponentFixture<TiffservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiffservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiffservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
