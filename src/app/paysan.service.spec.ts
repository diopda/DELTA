import { TestBed } from '@angular/core/testing';

import { PaysanService } from './paysan.service';

describe('PaysanService', () => {
  let service: PaysanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaysanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
