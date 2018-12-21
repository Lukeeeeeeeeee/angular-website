import { TestBed, inject } from '@angular/core/testing';

import { HeroCacheService } from './hero-cache.service';

describe('HeroCacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroCacheService]
    });
  });

  it('should be created', inject([HeroCacheService], (service: HeroCacheService) => {
    expect(service).toBeTruthy();
  }));
});
