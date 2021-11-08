import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskTravelComponent } from './ask-travel.component';

describe('AskTravelComponent', () => {
  let component: AskTravelComponent;
  let fixture: ComponentFixture<AskTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskTravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
