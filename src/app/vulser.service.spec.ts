import { TestBed } from '@angular/core/testing';

import { VulserService } from './vulser.service';

describe('VulserService', () => {
  let service: VulserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VulserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
