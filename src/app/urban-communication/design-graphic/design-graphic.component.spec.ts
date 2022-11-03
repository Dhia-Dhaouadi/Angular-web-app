import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignGraphicComponent } from './design-graphic.component';

describe('DesignGraphicComponent', () => {
  let component: DesignGraphicComponent;
  let fixture: ComponentFixture<DesignGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignGraphicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
