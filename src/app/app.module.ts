import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventlistingComponent } from './eventlisting/eventlisting.component';
import { EventbookingComponent } from './eventbooking/eventbooking.component';
import { HotelFilterPipe } from './hotel-filter.pipe';
// import { Hotel } from './model/hotel.model';

@NgModule({
  declarations: [
    AppComponent,
    EventlistingComponent,
    EventbookingComponent,
    HotelFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
