import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetblancardComponent } from './cabinetblancard.component';

describe('CabinetblancardComponent', () => {
  let component: CabinetblancardComponent;
  let fixture: ComponentFixture<CabinetblancardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinetblancardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetblancardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
