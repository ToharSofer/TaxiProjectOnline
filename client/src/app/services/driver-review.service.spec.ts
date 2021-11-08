import { TestBed } from '@angular/core/testing';

import { DriverReviewService } from './driver-review.service';

describe('DriverReviewService', () => {
  let service: DriverReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
