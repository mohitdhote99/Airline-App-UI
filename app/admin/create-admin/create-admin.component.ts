import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {


  AdminSignUp !: FormGroup;
  submitted: boolean =false;

  constructor(private formBuilder: FormBuilder,private adminservice:AdminService,private router: Router) { }

  ngOnInit(): void {
    this.AdminSignUp = this.formBuilder.group({ 
      admUsername!: ['', Validators.required], 
      admPassword!:['', Validators.required],
    }); 
  }

  onSubmit() { 

    this.submitted = true; 
    if(this.AdminSignUp.invalid){ 
      return; 
    }
    
    
    this.adminservice.createAdmin(this.AdminSignUp.value).subscribe( data => { 
        this.router.navigate(['/login-admin']);
        window.location.reload();
     }); 

  } 
}
