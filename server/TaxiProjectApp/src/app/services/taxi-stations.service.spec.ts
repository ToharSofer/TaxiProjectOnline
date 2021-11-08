import { TestBed } from '@angular/core/testing';

import { TaxiStationsService } from './taxi-stations.service';

describe('TaxiStationsService', () => {
  let service: TaxiStationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxiStationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
