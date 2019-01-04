import { TestBed, inject } from '@angular/core/testing';

import { CachingIntercepterService } from './caching-intercepter.service';

describe('CachingIntercepterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CachingIntercepterService]
    });
  });

  it('should be created', inject([CachingIntercepterService], (service: CachingIntercepterService) => {
    expect(service).toBeTruthy();
  }));
});
