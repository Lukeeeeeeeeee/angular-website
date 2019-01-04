import { TestBed, inject } from '@angular/core/testing';

import { TrimNameInterceptorService } from './trim-name-interceptor.service';

describe('TrimNameInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrimNameInterceptorService]
    });
  });

  it('should be created', inject([TrimNameInterceptorService], (service: TrimNameInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
