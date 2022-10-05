import { Injectable } from '@angular/core';
import { Flights } from '../model/flight.model';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http:HttpClient) { } 
  baseUrlflight:string = 'http://localhost:8282/Flight';

  // Get All Users
  getFlights(){ 
    return this.http.get<Flights[]>(this.baseUrlflight+'/flightlist'); 
  }

  getflightById(id:string){
    return this.http.get<Flights>(this.baseUrlflight+'/searchflight/'+id);
  }

  
  // http://localhost:8282/Flight/flightBySourceDest
  
  getFlightswithsource(flight:Flights){

    return this.http.post(this.baseUrlflight+'/flightBySourceDest',flight);
  }
  

}
