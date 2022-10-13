import { TestBed } from '@angular/core/testing';

import { BeatCoreService } from './beat-core.service';

describe('BeatCoreService', () => {
  let service: BeatCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeatCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
