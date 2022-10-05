export class Flights{ 
    flightId!: string; 
    flightName!: string; 
    flightArrival!: string; 
    flightDeparture!: string;
    flightSour!:string;
    flightDest!:string;

    constructor(flightId:string,flightName:string,flightArrival:string,flightDeparture:string,flightSour:string,flightDest:string)
    {
        this.flightId=flightId;
        this.flightName=flightName;
        this.flightArrival=flightArrival;
        this.flightDeparture=flightDeparture;
        this.flightSour=flightSour;
        this.flightDest=flightDest;
    }

}