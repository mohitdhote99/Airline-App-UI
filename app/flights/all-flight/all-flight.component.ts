import { Component, OnInit } from '@angular/core';
import { Flights } from 'src/app/model/flight.model';
import { FlightService } from 'src/app/services/flight.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-all-flight',
  templateUrl: './all-flight.component.html',
  styleUrls: ['./all-flight.component.css']
})
export class AllFlightComponent implements OnInit {
  
  flights!:Flights[];
  result:boolean=false;

  constructor(private fliService:FlightService) { }

  ngOnInit(): void {
    this.listAllFlights();
  }

  listAllFlights(){
    this.fliService.getFlights().subscribe((data: Flights[])=> { this.flights = data; });
  }

  public setFightIdtoSession(fliid:Flights){
    localStorage.setItem("flightid",fliid.flightId);
  }

}
