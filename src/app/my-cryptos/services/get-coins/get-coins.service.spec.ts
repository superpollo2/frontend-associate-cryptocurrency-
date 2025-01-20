import { TestBed } from '@angular/core/testing';

import { GetCoinsService } from './get-coins.service';

describe('GetCoinsService', () => {
  let service: GetCoinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCoinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
