import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFixedTravelComponent } from './edit-fixed-travel.component';

describe('EditFixedTravelComponent', () => {
  let component: EditFixedTravelComponent;
  let fixture: ComponentFixture<EditFixedTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFixedTravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFixedTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
