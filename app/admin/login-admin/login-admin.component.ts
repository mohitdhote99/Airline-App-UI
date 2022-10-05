import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {


  loginAdmin!:FormGroup;
  submitted: boolean =false;
  
  constructor(private formBuilder: FormBuilder,private adminservice:AdminService,private router: Router) { }

  ngOnInit(): void {

    this.loginAdmin = this.formBuilder.group({ 
      admUsername!: ['', Validators.required], 
      admPassword!:['', Validators.required],
    });

  }

  onSubmit(){

    this.submitted = true; 
    if(this.loginAdmin.invalid){ 
      return; 
    }
    

      this.adminservice.loginAdmin(this.loginAdmin.value).subscribe( data => { 
          if(data){
            this.router.navigate(['/app-admin']);
          }else{
            alert("invaid details");
          }
        }); 
  }

}
