import { TestBed, inject } from '@angular/core/testing';

import { EnsureInterceptorService } from './ensure-interceptor.service';

describe('EnsureInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnsureInterceptorService]
    });
  });

  it('should be created', inject([EnsureInterceptorService], (service: EnsureInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
