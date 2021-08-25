import { TestBed } from '@angular/core/testing';

import { GhRepoSearchService } from './gh-repo-search.service';

describe('GhRepoSearchService', () => {
  let service: GhRepoSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GhRepoSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
