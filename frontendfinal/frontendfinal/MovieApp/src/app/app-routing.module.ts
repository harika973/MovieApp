import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { TicketdetailsComponent } from './ticketdetails/ticketdetails.component';
import { RoleGuard } from './role.guard';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { UserGuard } from './user.guard';
import { UserComponent } from './user/user.component';
import { ViewticketsComponent } from './viewtickets/viewtickets.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'update/:movieId',component:UpdateMovieComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:'admin',component:AdminComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:'bookTicket/:movieId',component:BookTicketComponent,canActivate:[AuthGuard,UserGuard]},
  {path:'homeadmin',component:HomeadminComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:'homeuser',component:HomeuserComponent,canActivate:[AuthGuard,UserGuard]},
  {path:'addmovie',component:AddMovieComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:'user',component:UserComponent,canActivate:[AuthGuard,UserGuard]},
  {path:'register',component:RegisterComponent},
  {path:'viewTickets/:id',component:ViewticketsComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:'forgot',component:ForgotpasswordComponent},
  {path:'reset/:id',component:ResetpasswordComponent},
  {path:'ticketdetails',component:TicketdetailsComponent,canActivate:[AuthGuard,UserGuard]},
  {path:'', redirectTo:'/login', pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
