import { TestBed } from '@angular/core/testing';

import { KenGhService } from './ken-gh.service';

describe('KenGhService', () => {
  let service: KenGhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KenGhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
