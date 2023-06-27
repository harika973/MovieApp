import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTreeModule} from '@angular/material/tree';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { RegisterComponent } from './register/register.component';
import { ViewticketsComponent } from './viewtickets/viewtickets.component';
import { TicketdetailsComponent } from './ticketdetails/ticketdetails.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    UpdateMovieComponent,
    BookTicketComponent,
    AdminNavComponent,
    FooterComponent,
    HomeadminComponent,
    UserNavComponent,
    HomeuserComponent,
    AddMovieComponent,
    RegisterComponent,
    ViewticketsComponent,
    TicketdetailsComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule,MatButtonToggleModule,MatCardModule,MatCheckboxModule,MatDatepickerModule,
    MatDialogModule,MatDividerModule,MatIconModule,MatInputModule,MatListModule,
    MatMenuModule,MatPaginatorModule,MatProgressBarModule,MatProgressBarModule,MatSelectModule,
    MatSidenavModule,MatSlideToggleModule,MatSortModule,MatTableModule,MatTreeModule,
    FormsModule,HttpClientModule,MatExpansionModule,MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
