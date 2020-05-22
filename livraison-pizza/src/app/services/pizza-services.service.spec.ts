import { TestBed } from '@angular/core/testing';

import { PizzaServicesService } from './pizza-services.service';

describe('PizzaServicesService', () => {
  let service: PizzaServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
