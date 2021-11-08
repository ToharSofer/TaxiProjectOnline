import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFixedTravelComponent } from './add-fixed-travel.component';

describe('AddFixedTravelComponent', () => {
  let component: AddFixedTravelComponent;
  let fixture: ComponentFixture<AddFixedTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFixedTravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFixedTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
