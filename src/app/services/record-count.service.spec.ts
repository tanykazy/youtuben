import { TestBed } from '@angular/core/testing';

import { RecordCountService } from './record-count.service';

describe('RecordCountService', () => {
  let service: RecordCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
