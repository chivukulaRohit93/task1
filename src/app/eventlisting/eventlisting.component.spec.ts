import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventlistingComponent } from './eventlisting.component';

describe('EventlistingComponent', () => {
  let component: EventlistingComponent;
  let fixture: ComponentFixture<EventlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
