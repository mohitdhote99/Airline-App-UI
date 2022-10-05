import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Flights } from 'src/app/model/flight.model';
import { Tickets } from 'src/app/model/ticket.model';
import { User } from 'src/app/model/user.model';
import { FlightService } from 'src/app/services/flight.service';
import { TicketService } from 'src/app/services/ticket.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css', './book-ticket.component.scss']
})

export class BookTicketComponent implements OnInit {

  bookticket !: FormGroup;
  flight_id!: any;
  useremail!: any;
  fliobh!: Flights;
  userobh!: User;
  tickobj: Tickets =
    {
      user: {
        userId: 0,
        userName: "",
        userEmail: "",
        userGender: "",
        userCity: "",
        userCountry: "",
        userPassword: "",
        userContact: 0,
      },
      flights: {
        flightId: "",
        flightName: "",
        flightArrival: "",
        flightDeparture: "",
        flightSour: "",
        flightDest: ""
      },
      seatNo: "",
      categeory: ""
    };


  constructor(private formBuilder: FormBuilder, private router: Router, private bookingservice: TicketService, private flightservice: FlightService, private userservice: UserService) { }


  ngOnInit(): void {

    this.bookticket = this.formBuilder.group({
      seatNo!: ['', Validators.required],
      categeory!: ['', Validators.required]
    });

    this.getdetailsForBooking();

  }


  getdetailsForBooking(){

    this.flight_id = "";
    this.useremail = "";
    
    this.flight_id = localStorage.getItem("flightid");
    this.useremail = localStorage.getItem("userEmail");

    this.flightservice.getflightById(this.flight_id).subscribe(data => {
      this.tickobj.flights = data;
    });

    this.userservice.getuserByEmail(this.useremail).subscribe(data => {
      this.tickobj.user = data;
    });

  }


  onSubmit() { 
    if(localStorage.getItem("userIdActive") != null){
      this.showDeatilsForBookingTicket();
    }else{
      alert("signup and login first to book ticket");
    }
  }

  showDeatilsForBookingTicket() {

    this.tickobj.seatNo = this.bookticket.controls["seatNo"].value;
    this.tickobj.categeory = this.bookticket.controls["categeory"].value;

    this.bookingservice.bookTicket(this.tickobj).subscribe( data => { 
      if(data != null){
        alert("booking sucessfull");
        this.bookticket.reset;
        window.location.href='http://localhost:4200/list-all-flight';
      }else{
        alert("select another seat No");
      }

    });

  }



}

