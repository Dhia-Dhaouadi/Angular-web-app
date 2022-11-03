import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaromateComponent } from './laromate.component';

describe('LaromateComponent', () => {
  let component: LaromateComponent;
  let fixture: ComponentFixture<LaromateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaromateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaromateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
