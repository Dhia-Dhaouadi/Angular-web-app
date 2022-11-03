import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenziliComponent } from './menzili.component';

describe('MenziliComponent', () => {
  let component: MenziliComponent;
  let fixture: ComponentFixture<MenziliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenziliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenziliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
