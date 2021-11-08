import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedTravelComponent } from './fixed-travel.component';

describe('FixedTravelComponent', () => {
  let component: FixedTravelComponent;
  let fixture: ComponentFixture<FixedTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedTravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
