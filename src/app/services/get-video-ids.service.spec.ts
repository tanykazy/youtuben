import { TestBed } from '@angular/core/testing';

import { GetVideoIdsService } from './get-video-ids.service';

describe('GetVideoIdsService', () => {
  let service: GetVideoIdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetVideoIdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
