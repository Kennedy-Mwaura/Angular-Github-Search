import { TestBed } from '@angular/core/testing';

import { GhUserService } from './gh-user.service';

describe('GhUserService', () => {
  let service: GhUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GhUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
