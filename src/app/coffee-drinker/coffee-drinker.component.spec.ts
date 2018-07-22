import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeDrinkerComponent } from './coffee-drinker.component';

describe('CoffeeDrinkerComponent', () => {
  let component: CoffeeDrinkerComponent;
  let fixture: ComponentFixture<CoffeeDrinkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeDrinkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeDrinkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
