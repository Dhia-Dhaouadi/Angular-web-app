import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NourComponent } from './nour.component';

describe('NourComponent', () => {
  let component: NourComponent;
  let fixture: ComponentFixture<NourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
