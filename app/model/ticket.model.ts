import { Flights } from "./flight.model";
import { User } from "./user.model";

export class Tickets{ 
    user!: User;
    flights!: Flights;
    seatNo!:string;
    categeory!:string;
    constructor(user:User,flights:Flights,seatNo:string,categeory:string)
        {
            this.user=user;
            this.flights=flights;
            this.seatNo=seatNo;
            this.categeory=categeory;
        }
}
