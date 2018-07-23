import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Drinker } from '../drinker';
import { CoffeeDrinkersService } from '../coffee-drinkers.service';
import { IntraComponentMessageServiceService } from '../intra-component-message-service.service';


@Component({
  selector: 'app-coffee-drinker',
  templateUrl: './coffee-drinker.component.html',
  styleUrls: ['./coffee-drinker.component.css']
})
export class CoffeeDrinkerComponent implements OnInit {
  name = new FormControl('');
  constructor(private drinkersService: CoffeeDrinkersService, 
    private intraMessages: IntraComponentMessageServiceService) { }

  ngOnInit() {
    this.name.setValue('Matt Payne');
  }

  updateDrinker() {
    const name  = this.name.value;
    const contributions=5.0;
    console.log(`name updated to ${name}`);
    this.drinkersService.addDrinker( {name, contributions } as Drinker);
    this.intraMessages.sendMessage("Dude, there is a new drinker.");  // ha ha ha :-) 
  }

}
