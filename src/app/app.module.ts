import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoffeeDrinkerComponent } from './coffee-drinker/coffee-drinker.component';


@NgModule({
  declarations: [
    AppComponent,
    CoffeeDrinkerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
