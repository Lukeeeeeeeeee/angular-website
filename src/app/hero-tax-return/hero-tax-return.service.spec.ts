import { TestBed, inject } from '@angular/core/testing';

import { HeroTaxReturnService } from './hero-tax-return.service';

describe('HeroTaxReturnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroTaxReturnService]
    });
  });

  it('should be created', inject([HeroTaxReturnService], (service: HeroTaxReturnService) => {
    expect(service).toBeTruthy();
  }));
});
