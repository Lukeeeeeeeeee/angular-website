import { TestBed, inject } from '@angular/core/testing';

import { LoggingIntercepterService } from './logging-intercepter.service';

describe('LoggingIntercepterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggingIntercepterService]
    });
  });

  it('should be created', inject([LoggingIntercepterService], (service: LoggingIntercepterService) => {
    expect(service).toBeTruthy();
  }));
});
