import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventbookingComponent } from './eventbooking.component';

describe('EventbookingComponent', () => {
  let component: EventbookingComponent;
  let fixture: ComponentFixture<EventbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
