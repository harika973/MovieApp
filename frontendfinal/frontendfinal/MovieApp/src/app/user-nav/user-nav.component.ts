import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent {
  constructor(private router:Router,private userService:UserService){}

  logout(){
    this.userService.logout();
    this.router.navigateByUrl("/login");
  }

}
