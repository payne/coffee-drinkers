import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-coffee-drinker',
  templateUrl: './coffee-drinker.component.html',
  styleUrls: ['./coffee-drinker.component.css']
})
export class CoffeeDrinkerComponent implements OnInit {
  name = new FormControl('');
  constructor() { }

  ngOnInit() {
    this.name.setValue('Matt Payne');
  }

  updateDrinker() {
    const name  = this.name.value;
    console.log(`name updated to ${name}`);
  }

}
