import { Component, OnInit } from '@angular/core';

import { Drinker } from '../drinker';
import { CoffeeDrinkersService } from '../coffee-drinkers.service';

@Component({
  selector: 'app-list-coffee-drinkers',
  templateUrl: './list-coffee-drinkers.component.html',
  styleUrls: ['./list-coffee-drinkers.component.css']
})
export class ListCoffeeDrinkersComponent implements OnInit {
  coffeeDrinkers: Drinker[];

  constructor(private coffeeDrinkersService: CoffeeDrinkersService) { }

  ngOnInit() {
    this.getDrinkers();
    console.log(JSON.stringify(this.coffeeDrinkers));
  }

  getDrinkers(): void {
    this.coffeeDrinkersService.getDrinkers().subscribe(drinkers => this.coffeeDrinkers = drinkers);
  }

}
