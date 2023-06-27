import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  user= new User();
  form: FormGroup | any;
  hide=true;
  pwd: string |any;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private router:Router,private userService:UserService,private fb:FormBuilder){}

  qns1=[
    {id:1,name:"Which is your favorite city?"},
    {id:2,name:"What is your fav food?"},
    {id:3,name:"What is your birth place?"},
    {id:4,name:"What is your favorite Movie?"},
    {id:4,name:"What is your mothers name?"}
  ]
  

  ngOnInit(): void {
      this.form = this.fb.group({
        username:['',[Validators.required,Validators.minLength(5)]],
        password:['',
        [
          Validators.required,
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        ]
        ],
        confpassword:['',
        [
          Validators.required
          //Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        ]],
        email:['',
        [
          Validators.required,
          Validators.pattern(this.emailPattern)
        ]],
        secretQuestion:['',Validators.required],
        ans:['',Validators.required]
      });
  }

  registerUser(){
    // if(this.pwd==this.user.password){
    this.userService.userRegistration(this.form.value).subscribe(data=>{
      console.log(data);
      alert("User Registered Successfully");
      this.router.navigate(['/login']);
    },error=>{
      console.log(error);
    }
    );
  //}

  }

  validatePassword(form:FormGroup){
    if(form.controls['password'].value !== form.controls['confpassword'].value){
      form.controls['confpassword'].setErrors({passwordMismatch:true});
    }else{
      form.controls['confpassword'].setErrors(null);
    }
  }

  checkUserName(form:FormGroup){
    this.userService.getUsername(form.controls['username'].value).subscribe(data=>{
      if(data!=null){
        console.log("username exists");
        form.controls['username'].setErrors({usernameExist:true});
      }
    })
  }

}
