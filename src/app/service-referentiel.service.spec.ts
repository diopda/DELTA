import { TestBed } from '@angular/core/testing';

import { ServiceReferentielService } from './service-referentiel.service';

describe('ServiceReferentielService', () => {
  let service: ServiceReferentielService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceReferentielService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
