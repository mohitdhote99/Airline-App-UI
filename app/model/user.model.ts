export class User{

    userId!:number;
    userName!: string; 
    userEmail!: string; 
    userGender!: string; 
    userCity!: string; 
    userCountry!:string;
    userPassword!:string;
    userContact!:number;

    constructor(userId:number,userName:string,userEmail:string,userGender:string,userCity:string,userCountry:string,userPassword:string,userContact:number)
        {
            this.userId=userId;
            this.userName=userName;
            this.userEmail=userEmail;
            this.userGender=userGender;
            this.userCity=userCity;
            this.userCountry=userCountry;
            this.userPassword=userPassword;
            this.userContact=userContact;
        }

}