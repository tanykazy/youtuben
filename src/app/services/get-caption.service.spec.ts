import { TestBed } from '@angular/core/testing';

import { GetCaptionService } from './get-caption.service';

describe('GetCaptionService', () => {
  let service: GetCaptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCaptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
