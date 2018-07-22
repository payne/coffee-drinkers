import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-coffee-drinkers',
  templateUrl: './list-coffee-drinkers.component.html',
  styleUrls: ['./list-coffee-drinkers.component.css']
})
export class ListCoffeeDrinkersComponent implements OnInit {
  coffeeDrinkers=[
    { name: 'Rich' },
    { name: 'Eric' },
    { name: 'Evash' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
