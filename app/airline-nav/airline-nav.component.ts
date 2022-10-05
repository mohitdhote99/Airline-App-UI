import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-airline-nav',
  templateUrl: './airline-nav.component.html',
  styleUrls: ['./airline-nav.component.css']
})
export class AirlineNavComponent implements OnInit {
  
  user:boolean = false;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("userIdActive") != null){
      this.user = true;
    }
  }
  logout(){
    localStorage.removeItem("userIdActive");
    localStorage.removeItem("userEmail");
    this.user = false;
    this.router.navigate(['/login-user']);
    window.location.reload();
  }

}
