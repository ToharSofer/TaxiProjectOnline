import { TestBed } from '@angular/core/testing';

import { GetTravelService } from './get-travel.service';

describe('GetTravelService', () => {
  let service: GetTravelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTravelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
