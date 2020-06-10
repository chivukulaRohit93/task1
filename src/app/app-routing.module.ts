import { NgModule } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';
import { EventbookingComponent } from './eventbooking/eventbooking.component';
import { EventlistingComponent } from './eventlisting/eventlisting.component';



const routes: Routes = [
  {path:'', redirectTo:'/listing',pathMatch:'full' },
  {path:'Booking',component:EventbookingComponent},
  {path:'listing',component:EventlistingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
