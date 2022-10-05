import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Admin } from '../model/admin.model';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminUser(value: any) {
    throw new Error('Method not implemented.');
  }

/*  
  adminUser(value: any) {
    throw new Error('Method not implemented.');
  }
  loginAdmin(value: any) {
    throw new Error('Method not implemented.');
  }



*/
   baseUrladmin:string= 'http://localhost:8282/admin';
   constructor(private http:HttpClient) { }

   //create Admin
   createAdmin(admin: Admin){
     return this.http.post(this.baseUrladmin+'/addadmin',admin);
   }
    //Login Admin
    loginAdmin(admin: Admin){
      return this.http.post(this.baseUrladmin+'/login_admin',admin);
    }

}
