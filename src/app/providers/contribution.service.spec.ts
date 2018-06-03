import { TestBed, inject } from '@angular/core/testing';

import { ContributionService } from './contribution.service';

describe('ContributionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContributionService]
    });
  });

  it('should be created', inject([ContributionService], (service: ContributionService) => {
    expect(service).toBeTruthy();
  }));
});
