import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanfoodsComponent } from './urbanfoods.component';

describe('UrbanfoodsComponent', () => {
  let component: UrbanfoodsComponent;
  let fixture: ComponentFixture<UrbanfoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrbanfoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrbanfoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
