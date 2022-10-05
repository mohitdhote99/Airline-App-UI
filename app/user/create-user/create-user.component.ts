import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router'; 
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {


  registerUser !: FormGroup;
  submitted: boolean =false;

  constructor(private formBuilder: FormBuilder,private userservice:UserService,private router: Router) { }

  ngOnInit(): void {
    this.registerUser = this.formBuilder.group({ 
      userName!: ['', Validators.required], 
      userEmail!: ['', Validators.required], 
      userGender!: ['', Validators.required], 
      userCity!: ['', Validators.required],
      userCountry!:['', Validators.required],
      userPassword!:['', Validators.required],
      userContact!:['', Validators.required],
    }); 
  }


  onSubmit() {
 
    this.submitted = true;
    if(this.registerUser.invalid){
      return;
    }
    
    this.userservice.createUser(this.registerUser.value).subscribe( (data) => { 
        if(data != null){
          alert("Registerd succesfull "+this.registerUser.controls["userName"].value);
          this.router.navigate(['/list-all-flight']);
        }
      }); 

  } 
}
