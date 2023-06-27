import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from '../user';
import { UserService } from '../user.service';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let userObj:FormGroup | any;
  let userService:UserService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports:[HttpClientTestingModule,HttpClientModule,FormsModule,RouterTestingModule, MatCardModule,MatFormFieldModule,
        MatInputModule,BrowserAnimationsModule,MatTableModule,MatDialogModule,MatPaginatorModule,ReactiveFormsModule,
        MatToolbarModule,MatIconModule,MatSelectModule]
    })
    .compileComponents();

    userService=TestBed.inject(UserService);
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


   it('should return http Post call',()=>
   {
     userObj =
     {
       username:"Anjali",password:"Anjali@15",confpassword:"Anjali@15",email:"anjali12@gmail.com",
       secretQuestion:"Which is your favorite city?",ans:"mumbai",userrole:"User",userId:28
     };

     userService.userRegistration(userObj).subscribe({
      error:(error)=>
       {
         expect(error).toBeTruthy();
         expect(error.status).withContext('status').toEqual(409);
       }
     });
     const ctrl = TestBed.inject(HttpTestingController);
     const mockHttp = ctrl.expectOne('http://localhost:5002/auth/v1/addUser');
     const httpReq = mockHttp.request;

     mockHttp.flush("error request",{status:409, statusText:"Conflict"});
   });





});
