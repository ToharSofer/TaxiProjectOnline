import { TestBed } from '@angular/core/testing';

import { RegularUsersService } from './regular-users.service';

describe('RegularUsersService', () => {
  let service: RegularUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegularUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
