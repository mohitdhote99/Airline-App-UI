import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Flights } from 'src/app/model/flight.model';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  // searchflights!:Flights[];
  searchbysource!:FormGroup;
  searchflights!: Object;
  constructor(private formBuilder: FormBuilder,private fliService:FlightService) { }

  ngOnInit(): void {
     this.searchbysource = this.formBuilder.group({ 
      source!: ['', Validators.required], 
      destination!: ['', Validators.required],
    });
  }

  onSubmit(){
    this.fliService.getFlightswithsource(this.searchbysource.value).subscribe(data=> {
      console.log(JSON.stringify(data));
    });
  }

}
