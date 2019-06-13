import { TestBed } from '@angular/core/testing';

import { GetcartService } from './getcart.service';

describe('GetcartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetcartService = TestBed.get(GetcartService);
    expect(service).toBeTruthy();
  });
});
