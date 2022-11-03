import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HennechimoumaComponent } from './hennechimouma.component';

describe('HennechimoumaComponent', () => {
  let component: HennechimoumaComponent;
  let fixture: ComponentFixture<HennechimoumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HennechimoumaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HennechimoumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
