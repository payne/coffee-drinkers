import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDrinkerDataServiceService }  from './in-memory-drinker-data-service.service';
import { IntraComponentMessageServiceService } from './intra-component-message-service.service';

import { AppComponent } from './app.component';
import { CoffeeDrinkerComponent } from './coffee-drinker/coffee-drinker.component';
import { ListCoffeeDrinkersComponent } from './list-coffee-drinkers/list-coffee-drinkers.component';

import { CoffeeDrinkersService } from './coffee-drinkers.service';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeDrinkerComponent,
    ListCoffeeDrinkersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDrinkerDataServiceService, { dataEncapsulation: false }
    )
  ],
  providers: [CoffeeDrinkersService, InMemoryDrinkerDataServiceService, IntraComponentMessageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
