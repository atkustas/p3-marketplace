import { TestBed } from '@angular/core/testing';

import { ApigeeApiService } from './apigee-api.service';

describe('ApigeeApiService', () => {
  let service: ApigeeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApigeeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
