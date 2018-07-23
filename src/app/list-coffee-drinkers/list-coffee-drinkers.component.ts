import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Drinker } from '../drinker';
import { CoffeeDrinkersService } from '../coffee-drinkers.service';
import { IntraComponentMessageServiceService } from '../intra-component-message-service.service';

@Component({
  selector: 'app-list-coffee-drinkers',
  templateUrl: './list-coffee-drinkers.component.html',
  styleUrls: ['./list-coffee-drinkers.component.css']
})
export class ListCoffeeDrinkersComponent implements OnInit, OnDestroy {
  coffeeDrinkers: Drinker[];
  drinker: Drinker;
  subscription: Subscription;

  constructor(private coffeeDrinkersService: CoffeeDrinkersService,
    private intraMessages: IntraComponentMessageServiceService) { 
      this.subscription =  intraMessages.getMessage().subscribe(drinker => { 
        this.drinker = drinker.drinker;
        console.log(this.drinker);
        this.coffeeDrinkers.push(this.drinker);
        // Why!? this.getDrinkers(); // Since only message is for new drinker 
      });
    }

  ngOnInit() {
    this.getDrinkers();
    console.log(JSON.stringify(this.coffeeDrinkers));
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  getDrinkers(): void {
    this.coffeeDrinkersService.getDrinkers().subscribe(drinkers => { 
      this.coffeeDrinkers = drinkers;
      console.log('list-coffee-drinkers coffeeDrinkers are:');
      console.log(JSON.stringify(this.coffeeDrinkers));
    });
  }

}
