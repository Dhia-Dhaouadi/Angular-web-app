import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanCommunicationComponent } from './urban-communication.component';

describe('UrbanCommunicationComponent', () => {
  let component: UrbanCommunicationComponent;
  let fixture: ComponentFixture<UrbanCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrbanCommunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrbanCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
