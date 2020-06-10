import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventlisting',
  templateUrl: './eventlisting.component.html',
  styleUrls: ['./eventlisting.component.css']
})
export class EventlistingComponent implements OnInit {
  searchterm:string;
  constructor() { }

  ngOnInit() {
  }
  hotels = [
    { img : 'assets/room1.jpg', Name : 'Swaghat Hotel', Location : 'Hyderabad' , Book : 'Book Now'},
    { img : 'assets/room2.jpg', Name : 'Panama Hotel', Location : 'Bangalore' , Book : 'Book Now' },
    { img : 'assets/room3.jpg', Name : 'Orange Hotel', Location : 'Chennai' , Book : 'Book Now' },
    { img : 'assets/room4.jpg', Name : 'Centuary Hotel', Location : 'Kochi' , Book : 'Book Now' }

  ];
}
