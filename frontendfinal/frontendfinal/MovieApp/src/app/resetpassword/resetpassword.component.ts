import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit{
  user=new User;
  user1=new User;
  pwd:String | any;
  display=false;
  toDisplay=true;
  msg='';
  id:number|any;
data= new User;
error:any;
hide=true;
confpassword:String |any;


  constructor(private router:Router,private userService:UserService,private activatedRoute:ActivatedRoute){}

  qns1=[
    {id:1,name:"Which is your favorite city?"},
    {id:2,name:"What is your birth place?"},
    {id:3,name:"What is your favorite Movie?"},
    {id:4,name:"What is your fav food?"},
    {id:5,name:"What is your mothers name?"}
  ]

  ngOnInit(){
    this.id=this.activatedRoute.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe(data=>{
      this.user=data;
    })

  }


  // getMatch(userId:number,ans:String){
  //   this.userService.verifyUser(userId,ans).subscribe(data=>{
  //     console.log(data);
  //     this.msg=data;
  //     alert("Ans matched proceed");
  //     this.toDisplay=!this.toDisplay;
  //     this.display=!this.display;
  //   },error=>{
  //     alert("ans not matched proceed");
  //   })
  // }

  getMatch(userId:String |any,ans:String | any){
    this.userService.getUserById(userId).subscribe(data=>{
      console.log(data);
      if(ans == data.ans && userId==data.userId){
        this.toDisplay=!this.toDisplay;
        this.display=!this.display;
        alert("Ans Matched");
      }else{
        alert("Ans Not Matched");
        this.router.navigateByUrl('/forgot');
      }
      
    },(error:any)=>{
      console.log(error);
      alert("ans not matched proceed");
      this.router.navigateByUrl('/forgot');
    })
  }



  save(){
    if(this.user1.confpassword==this.user1.password){
    this.userService.updateUser(this.id,this.user1).subscribe(data=>{
      console.log(data);
      alert("Password Changed Successfully");
      this.router.navigate(['/login']);
    },error=>{
       alert("passwrod not changed try again");
    });
  }else{
    alert("password not matched try again");
    this.confpassword='';
    this.user1.password='';
  }
  }

}
