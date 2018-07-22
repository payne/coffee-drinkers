import { TestBed, inject } from '@angular/core/testing';

import { InMemoryDrinkerDataServiceService } from './in-memory-drinker-data-service.service';

describe('InMemoryDrinkerDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryDrinkerDataServiceService]
    });
  });

  it('should be created', inject([InMemoryDrinkerDataServiceService], (service: InMemoryDrinkerDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
