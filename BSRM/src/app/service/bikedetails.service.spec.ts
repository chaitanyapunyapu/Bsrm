import { TestBed } from '@angular/core/testing';

import { BikedetailsService } from './bikedetails.service';

describe('BikedetailsService', () => {
  let service: BikedetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikedetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
