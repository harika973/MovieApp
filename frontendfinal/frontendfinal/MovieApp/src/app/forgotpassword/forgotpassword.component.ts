import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  user =new User;
  pwd:String | any;
  display=false;
  toDisplay=true;
  msg='';
  username:String |any;
  ans:String |any;

  constructor(private router:Router,private userService:UserService,private activatedRoute:ActivatedRoute){}

reset(username:String){
  this.userService.getUsername(username).subscribe((data:any)=>{
    if(this.user.username == data.username){
    localStorage.setItem('id',data.userId);
    console.log(data);
    const id = localStorage.getItem('id');
    this.router.navigateByUrl('/reset/'+id);
    }else {
       alert("User Name is Incorrect");
       //this.router.navigateByUrl('/forgot');
    }

  },error=>{
    alert("User name is incorrect");
    this.router.navigateByUrl('/login');
    console.log(error);
  })
}













  // qns1=[
  //   {id:1,name:"Which is your favorite city?"},
  //   {id:2,name:"What is your fav food?"},
  //   {id:3,name:"What is your birth place?"},
  //   {id:4,name:"What is your favorite Movie?"},
  //   {id:4,name:"What is your mothers name?"}
  // ]
  

  // ngOnInit(): void {
  //   this.reset(this.username,this.ans);
  //     // this.username=this.activatedRoute.snapshot.params['username'];
  //     // this.userService.getUsername(this.username).subscribe(data=>{
  //     //   this.user=data;
  //     // })
  // }
  
  // reset(username:string,ans:string){

  //   this.userService.forgot(username,ans).subscribe((data)=>{
  //     this.msg=JSON.stringify(data);
  //     alert("Ans Matched Proceed");
  //     this.toDisplay=!this.toDisplay;
  //     this.display=!this.display;
  //   },(error)=>{
  //     console.log(error);
  //     alert("Ans Not Matched you could not proceed");
  //   })
    
  // }


  // save(){
  //   if(this.pwd==this.user1.password){
  //   this.userService.update(this.username,this.user1).subscribe(data=>{
  //     console.log(data);
  //     alert("Password Changed Successfully");
  //     this.router.navigate(['/login']);
  //   },(error:any)=>{
  //     console.log(error);
  //      alert("password not changed try again");
  //   });
  // }else{
  //   alert("password not matched try again");
  //   this.pwd='';
  //   this.user1.password='';
  // }
  // }

}
