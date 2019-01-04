import { TestBed, inject } from '@angular/core/testing';

import { UploadInterceptorService } from './upload-interceptor.service';

describe('UploadInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadInterceptorService]
    });
  });

  it('should be created', inject([UploadInterceptorService], (service: UploadInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
