import { TestBed } from '@angular/core/testing';

import { WfserviceService } from './wfservice.service';

describe('WfserviceService', () => {
  let service: WfserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WfserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
