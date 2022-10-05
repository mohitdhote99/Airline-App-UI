import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirlineNavComponent } from './airline-nav/airline-nav.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { HttpClientModule } from '@angular/common/http';
import { FlightsComponent } from './flights/flights.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { BookTicketComponent } from './flights/book-ticket/book-ticket.component';
import { AddFlightComponent } from './admin/add-flight/add-flight.component';
import { CreateAdminComponent } from './admin/create-admin/create-admin.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { LoginUserComponent } from './user/login-user/login-user.component';
import { FlightSearchComponent } from './flights/flight-search/flight-search.component';
import { AllFlightComponent } from './flights/all-flight/all-flight.component';

@NgModule({
  declarations: [
    AppComponent,
    AirlineNavComponent,
    HomeContentComponent,
    FlightsComponent,
    UserComponent,
    AdminComponent,
    CreateUserComponent,
    BookTicketComponent,
    AddFlightComponent,
    CreateAdminComponent,
    LoginAdminComponent,
    LoginUserComponent,
    FlightSearchComponent,
    AllFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
