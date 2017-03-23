import { TestBed, inject } from '@angular/core/testing';

import { BackendRequestService } from './backend-request.service';

describe('BackendRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendRequestService]
    });
  });

  it('should ...', inject([BackendRequestService], (service: BackendRequestService) => {
    expect(service).toBeTruthy();
  }));
});
