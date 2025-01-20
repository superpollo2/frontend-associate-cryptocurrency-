import { TestBed } from '@angular/core/testing';

import { GetAllCoinsService } from './get-coins.service';

describe('GetCoinsService', () => {
  let service: GetAllCoinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllCoinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
