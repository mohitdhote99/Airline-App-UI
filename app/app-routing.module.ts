import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreateAdminComponent } from './admin/create-admin/create-admin.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { AppComponent } from './app.component';
import { AllFlightComponent } from './flights/all-flight/all-flight.component';
import { BookTicketComponent } from './flights/book-ticket/book-ticket.component';
import { FlightsComponent } from './flights/flights.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { LoginUserComponent } from './user/login-user/login-user.component';

const routes: Routes = [
  { path: '',component: HomeContentComponent },
  { path:'signup-user',component: CreateUserComponent },
  { path:'signup-admin',component: CreateAdminComponent },
  { path:'book-ticket',component:BookTicketComponent },
  { path:'login-admin',component:LoginAdminComponent },
  { path:'login-user',component:LoginUserComponent },
  { path:'list-all-flight',component:AllFlightComponent },
  { path:'searchflight',component:FlightsComponent },
  { path:'app-admin',component:AdminComponent },
  { path:'flight',component:FlightsComponent },
  { path: '**', component: HomeContentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
