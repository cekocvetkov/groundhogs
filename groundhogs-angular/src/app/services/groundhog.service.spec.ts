import { TestBed } from '@angular/core/testing';

import { GroundhogService } from './groundhog.service';

describe('GroundhogService', () => {
  let service: GroundhogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroundhogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
