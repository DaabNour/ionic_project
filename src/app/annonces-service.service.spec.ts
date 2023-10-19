import { TestBed } from '@angular/core/testing';

import { AnnoncesServiceService } from './annonces-service.service';

describe('AnnoncesServiceService', () => {
  let service: AnnoncesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnoncesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
