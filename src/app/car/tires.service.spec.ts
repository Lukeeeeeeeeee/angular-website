import { TestBed, inject } from '@angular/core/testing';

import { TiresService } from './tires.service';

describe('TiresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TiresService]
    });
  });

  it('should be created', inject([TiresService], (service: TiresService) => {
    expect(service).toBeTruthy();
  }));
});
