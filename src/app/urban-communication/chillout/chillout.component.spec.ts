import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilloutComponent } from './chillout.component';

describe('ChilloutComponent', () => {
  let component: ChilloutComponent;
  let fixture: ComponentFixture<ChilloutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChilloutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilloutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
