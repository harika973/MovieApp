import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent {

  constructor(private router:Router,private userService:UserService){}

  logout(){
    this.userService.logout();
    this.router.navigateByUrl("/login");
  }

}
