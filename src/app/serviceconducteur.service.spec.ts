import { TestBed } from '@angular/core/testing';

import { serviceconducteurService } from './serviceconducteur.service';

describe('ServiceconducteurService', () => {
  let service: serviceconducteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(serviceconducteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
