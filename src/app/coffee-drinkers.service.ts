import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Drinker } from './drinker';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CoffeeDrinkersService {
  drinkersUrl = 'api/drinkers'; 
  constructor(private http: HttpClient) { }

  getDrinkers(): Observable<Drinker[]> {
    return this.http.get<Drinker[]>(this.drinkersUrl);
  }

  addDrinker(drinker: Drinker): Observable<Drinker> {
    return this.http.post<Drinker>(this.drinkersUrl, drinker, httpOptions);
  }

}
