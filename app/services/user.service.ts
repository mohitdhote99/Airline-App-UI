import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  baseUrluser:string = 'http://localhost:8282/User';
  constructor(private http:HttpClient) { }

    // Create User 
    createUser(user: User) {
      return this.http.post(this.baseUrluser+'/add_user', user );
    }
    
    loginUser(user: User) {
      return this.http.post(this.baseUrluser+'/loginuser', user );
    }

    public getuserByEmail (email:string){
      return this.http.get<User>(this.baseUrluser+'/getUser/'+email);
    }

}
