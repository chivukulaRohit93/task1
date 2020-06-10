import { Component, OnInit } from '@angular/core';
import { Hotel } from '../model/hotel.model';


@Component({
  selector: 'app-eventbooking',
  templateUrl: './eventbooking.component.html',
  styleUrls: ['./eventbooking.component.css']
})
export class EventbookingComponent implements OnInit {
  public currentEventInfoShared = '';
 public currentSelectedValue:any = [];
 public localNumberOfAttende:any = [];
 public contractValues: any = []; //  Event booking form values 
 public totalEventSeatsNumber: number;
 public count:number = 0;
 public compareValue:boolean;
  MainData:any = [];
  statusMessage:boolean = false;
  
  itemDetails = [{
    "numberOfAttendee": ""
   }]

  hotel1:Hotel = {
    username: null,
    email: null,
    phone: null,
    seats: null,
    attendees: null
  }
  constructor() { }

  ngOnInit() {
  }

  
  addNewAttendeName(e:any){
    this.count++;
    let newRow = {
      "numberOfAttendee": ""
    }
    this.compareValue = this.count < this.totalEventSeatsNumber;

    if(this.compareValue){
      if(this.count){
        this.itemDetails.push(newRow);
      }
    }

    this.statusMessage = false; //If New Attendee is added by user need to hide the status message

  }
  
  saveform(data){
    if(data){
      let res:any = Object.entries(data);
      this.MainData = res;
      console.log("EventBookingConfirmData", this.MainData); //Please check for conformed event booking data in console
      this.statusMessage = true;
    }
    else{
      this.statusMessage = false;
    }
  }


}
