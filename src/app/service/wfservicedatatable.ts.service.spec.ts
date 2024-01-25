import { TestBed } from '@angular/core/testing';

import { WfservicedatatableTsService } from './wfservicedatatable.ts.service';

describe('WfservicedatatableTsService', () => {
  let service: WfservicedatatableTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WfservicedatatableTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
