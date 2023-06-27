import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import { ResetpasswordComponent } from './resetpassword.component';

describe('ResetpasswordComponent', () => {
  let component: ResetpasswordComponent;
  let fixture: ComponentFixture<ResetpasswordComponent>;
  let userObj:User;
  let userService:UserService;
  let httpClient:HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetpasswordComponent ],
      imports:[HttpClientTestingModule,HttpClientModule,FormsModule,RouterTestingModule, MatCardModule,MatFormFieldModule,
        MatInputModule,BrowserAnimationsModule,MatTableModule,MatDialogModule,MatPaginatorModule,ReactiveFormsModule,
        MatToolbarModule,MatIconModule,MatSelectModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetpasswordComponent);
    userService=TestBed.inject(UserService);
    httpClient=TestBed.inject(HttpClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should return http Get call',()=>
  {
    userObj =
    {
      userId:29,username:"Ahalya",password:"ahalya@28",email:"ahalya@gmail.com",secretQuestion:"Which is your fav food?",
      ans:"paneer",userrole:"User",confpassword:"ahalya@28"
    };
 let result :User[]|any;
     userService.getUserById(userObj.userId).subscribe(data=>
      {
        result = data;
        expect(result[0]).toEqual(userObj);
      })
    
    const ctrl = TestBed.inject(HttpTestingController);
    const mockHttp = ctrl.expectOne('http://localhost:5002/auth/v1/getById/29');
    const httpReq = mockHttp.request;

    expect(httpReq.method).toEqual('GET');
  });




  it('should return http Put call',()=>
  {
    userObj =
    {
      userId:29,username:"Ahalya",password:"ahalya@28",email:"ahalya@gmail.com",secretQuestion:"Which is your fav food?",
      ans:"paneer",userrole:"User",confpassword:"ahalya@28"
    };
    userService.updateUser(userObj.userId,userObj).subscribe({
      next:(response)=>
      {
        expect(response).toBeTruthy();
        expect(response.userId).toEqual(29);
      }
    });

    const ctrl = TestBed.inject(HttpTestingController);

    const mockHttp = ctrl.expectOne('http://localhost:5002/auth/v1/updateps/29');

    const httpReq = mockHttp.request;
    expect(httpReq.method).toEqual('PUT');

  });



});
