import { TestBed } from '@angular/core/testing';

import { AdultDataService } from './adult-data.service';

describe('AdultDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdultDataService = TestBed.get(AdultDataService);
    expect(service).toBeTruthy();
  });
});
