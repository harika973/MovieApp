import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedInpub$ = this.isLoggedIn$.asObservable();
  constructor(private http:HttpClient) { 
    const token = localStorage.getItem('jwtToken')
    if (token != null) {
    this.isLoggedIn$.next(!!token);
   }
  }
  


   public getUsername(username:String |any):Observable<any>{
      return this.http.get<any>(`http://localhost:5002/auth/v1/getuser/${username}`);
   }



    public getUserById(id:number | any){
    return this.http.get<User>(`http://localhost:5002/auth/v1/getById/${id}`);
  }



  public login(user:User){
    return this.http.post<User>("http://localhost:5002/auth/v1/login",user);
  }


  public getAllUsers(){
    return this.http.get<User[]>("http://localhost:5002/api/v1/getAllUsers");
  }



  public userRegistration(user:FormGroup){
    return this.http.post<User>("http://localhost:5002/auth/v1/addUser",user);
  }


  public updateUser(userId:number,user:User):Observable<any>
    {
      return this.http.put<any>(`http://localhost:5002/auth/v1/updateps/${userId}`,user);
    }

  //  public getUserById(id:number | any):Observable<any>{
  //   return this.http.get<any>(` https://qwc4s4yj1g.execute-api.us-west-2.amazonaws.com/UserServiceDeploy/getbyid/${id}`);
  // }


  // public login(user:User){
  //   return this.http.post<User>("https://qwc4s4yj1g.execute-api.us-west-2.amazonaws.com/UserServiceDeploy/login",user);
  // }


  // public userRegistration(user:User):Observable<any>{
  //   return this.http.post<User>(' https://qwc4s4yj1g.execute-api.us-west-2.amazonaws.com/UserServiceDeploy/registeruser',user);
  // }


  

  //  public updateUser(userId:number,user:User):Observable<any>
  //   {
  //     return this.http.put<any>(`https://qwc4s4yj1g.execute-api.us-west-2.amazonaws.com/UserServiceDeploy/getbyid/${userId}`,user);
  //   }

  loginUserDetails(usern:User){
  
    return this.login(usern).pipe(
     tap((response:any) => {
    
    
     this.isLoggedIn$.next(true);
     
     localStorage.setItem('jwtToken' , response.jwtToken);
     localStorage.setItem('role' , response.role);
     console.log("test"+response.jwtToken);
     console.log("test"+response.role);
  })
    )
 }
     
 

 public getToken(): string {
  return localStorage.getItem('jwtToken')!;
}

public getRole(): string {
  return localStorage.getItem('role')!;
}

public isLoggedIn() {
  return this.getToken();
}

logout(){
  this.isLoggedIn$.next(false);
  localStorage.removeItem('jwtToken');
  localStorage.removeItem('role');
}
 
}
