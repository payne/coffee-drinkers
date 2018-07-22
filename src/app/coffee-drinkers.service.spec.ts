import { TestBed, inject } from '@angular/core/testing';

import { CoffeeDrinkersService } from './coffee-drinkers.service';

describe('CoffeeDrinkersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoffeeDrinkersService]
    });
  });

  it('should be created', inject([CoffeeDrinkersService], (service: CoffeeDrinkersService) => {
    expect(service).toBeTruthy();
  }));
});
