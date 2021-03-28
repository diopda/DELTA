import { TestBed } from '@angular/core/testing';

import { BailleurServiceService } from './bailleur-service.service';

describe('BailleurServiceService', () => {
  let service: BailleurServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BailleurServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
