import { Component, OnInit } from '@angular/core';
import { Flights } from '../model/flight.model';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  result:boolean=false;
  constructor(private fliService:FlightService) { }

  ngOnInit(): void {
    
  }
    


}
