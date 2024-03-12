import { TestBed } from '@angular/core/testing';

import { NecromancerService } from './necromancer.service';

describe('NecromancerService', () => {
  let service: NecromancerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NecromancerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
