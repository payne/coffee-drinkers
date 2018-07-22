import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCoffeeDrinkersComponent } from './list-coffee-drinkers.component';

describe('ListCoffeeDrinkersComponent', () => {
  let component: ListCoffeeDrinkersComponent;
  let fixture: ComponentFixture<ListCoffeeDrinkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCoffeeDrinkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCoffeeDrinkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
