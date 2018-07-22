import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDrinkerDataServiceService implements InMemoryDbService {
  createDb() {
    const drinkers = [
      { id: 1, name: 'Rich', contributions: 25.00 },
      { id: 2, name: 'Eric', contributions: 15.00 },
      { id: 3, name: 'Evash', contributions: 20.00 },
    ];
    return {drinkers};
  }
}
