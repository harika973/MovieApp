import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // form: FormGroup = new FormGroup({
  //   username:new FormControl(''),
  //   password:new FormControl(''),
  // });
  hide=true;
  error!:string;
  user:User = new User();
  msg:string|any;
  constructor(private userService:UserService,private router:Router){}


loginUser(){

  this.userService.loginUserDetails(this.user).subscribe((data:any) => {
   console.log(data);
   const roleObj = localStorage.getItem('role');
   const token = localStorage.getItem('jwtToken');
  
   //console.log(roleObj);
       
  //console.log(token);

   if(roleObj == "Admin" && this.user.username=="Harika" && this.user.password=="Harika@15" && token !=null){
    this.router.navigate(["/homeadmin"]);
   }
   else if(roleObj=='User') {
     this.router.navigate(["/homeuser"]);
   }else{
    //alert("Incorrect Details,Enter Correct Details");
    this.msg="Invalid Credentials";
    //this.router.navigateByUrl('/login');
   }
  
},
(error)=>{
  console.log(error);
  //alert("Invalid values");
  //this.msg="Invalid Credentials";
  }
 
 );
   }


  


 }
