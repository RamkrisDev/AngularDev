import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  noAuthHeader={headers:new HttpHeaders({'NoAuth':'True'})};

  selectuser:User={
    firstname:"",
    lastname:"",
     email:"",
    password:"",
     role:"",
    address:""
  }

  constructor(private http:HttpClient) { }


  // _url="http://localhost:3000/users";

  postUser(user:User){
    
    return this.http.post(environment.userUrl+"/register",user,this.noAuthHeader);
   
  }

  getUser(){
    console.log(environment.userUrl)
    return this.http.get(environment.userUrl+"/totalData");
   
  }

  login(authCredentials:any):Observable<object>{
    return this.http.post(environment.userUrl+'/authenticate',authCredentials,this.noAuthHeader);
}


getUserProfile(){
  return this.http.get(environment.userUrl+'/userProfile')
}
  
setToken(token:any){
  localStorage.setItem('token',token['token']);

}

deleteToken(){
  localStorage.remove('token');

}

getUserPayload(){
  var token = this.getToken();
  if(token){
    var userPayload=atob(token.split(".")[1]);

    console.log(JSON.parse(userPayload))

    return JSON.parse(userPayload);
  }
  else{
    return null;
  }

}


isLoggedIn(){
  var userPayload=this.getUserPayload();

  if(userPayload){
    return userPayload.exp >Date.now()/1000;

    }
    else{
      return false;
    }

}

getToken(){
  return localStorage.getItem('token');
}




}
