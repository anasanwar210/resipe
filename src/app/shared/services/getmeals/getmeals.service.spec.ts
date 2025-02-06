import { TestBed } from '@angular/core/testing';

import { GetmealsService } from './getmeals.service';

describe('GetmealsService', () => {
  let service: GetmealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetmealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
