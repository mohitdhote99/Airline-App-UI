import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 

import { Router } from '@angular/router'; 
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  loginUser!:FormGroup;
  userIdActive!:User;
  em:any;
  submitted: boolean =false;
  constructor(private formBuilder: FormBuilder,private userservice:UserService,private router: Router) { }

  ngOnInit(): void {
    this.loginUser = this.formBuilder.group({ 
      userEmail!: ['', Validators.required],
      userPassword!:['', Validators.required],
    }); 
  }
  
  onSubmit(){

    this.submitted = true; 
    if(this.loginUser.invalid){ 
      return; 
    }

    
    this.loginUserAirline();
    this.em = localStorage.getItem("userEmail");
    this.userservice.getuserByEmail(this.em).subscribe(data=>{
      localStorage.setItem("userIdActive",JSON.stringify(data.userId));
    });
  }

  loginUserAirline(){
    this.userservice.loginUser(this.loginUser.value).subscribe( data => {
        if(data){
          localStorage.setItem("userEmail",this.loginUser.controls['userEmail'].value);
          alert("login successfull");
          window.location.href='http://localhost:4200/searchflight';
        }else{
          alert("invalid credentials !");
        }
      });
  }

}
