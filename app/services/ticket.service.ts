import { Injectable } from '@angular/core';
import { Flights } from '../model/flight.model';
import { HttpClient} from '@angular/common/http';
import { Tickets } from '../model/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  baseurlTicket:string ='http://localhost:8282/Ticket';
  constructor(private http:HttpClient) { }


  // Create User 
  public bookTicket(tick:Tickets) {
    console.log("serv "+tick.user.userId);
    console.log("serv "+tick.flights.flightId);
    return this.http.post(this.baseurlTicket+'/ticketBook', tick);
  } 

}
