import { TestBed, inject } from '@angular/core/testing';

import { AlterEgoService } from './alter-ego.service';

describe('AlterEgoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlterEgoService]
    });
  });

  it('should be created', inject([AlterEgoService], (service: AlterEgoService) => {
    expect(service).toBeTruthy();
  }));
});
