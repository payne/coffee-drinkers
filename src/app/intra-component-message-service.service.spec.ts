import { TestBed, inject } from '@angular/core/testing';

import { IntraComponentMessageServiceService } from './intra-component-message-service.service';

describe('IntraComponentMessageServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntraComponentMessageServiceService]
    });
  });

  it('should be created', inject([IntraComponentMessageServiceService], (service: IntraComponentMessageServiceService) => {
    expect(service).toBeTruthy();
  }));
});
