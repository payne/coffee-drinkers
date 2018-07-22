import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CoffeeDrinkerComponent } from './coffee-drinker/coffee-drinker.component';
import { ListCoffeeDrinkersComponent } from './list-coffee-drinkers/list-coffee-drinkers.component';


@NgModule({
  declarations: [
    AppComponent,
    CoffeeDrinkerComponent,
    ListCoffeeDrinkersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
