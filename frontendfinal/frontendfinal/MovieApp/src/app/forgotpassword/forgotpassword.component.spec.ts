import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractControlDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { NgbAccordionBody } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../user';
import { UserService } from '../user.service';

import { ForgotpasswordComponent } from './forgotpassword.component';

describe('ForgotpasswordComponent', () => {
  let component: ForgotpasswordComponent;
  let fixture: ComponentFixture<ForgotpasswordComponent>;
  let userObj :User;
  let userService :UserService;
  let httpClient:HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotpasswordComponent ],
      imports:[HttpClientTestingModule,HttpClientModule,FormsModule,RouterTestingModule, MatCardModule,MatFormFieldModule,
        MatInputModule,BrowserAnimationsModule,MatTableModule,MatDialogModule,MatPaginatorModule,ReactiveFormsModule,
        MatToolbarModule,MatIconModule,MatSelectModule]
    })
    .compileComponents();

    httpClient = TestBed.inject(HttpClient);
    userService = TestBed.inject(UserService);
    fixture = TestBed.createComponent(ForgotpasswordComponent);
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
      username:"Aruna",password:"aruna@15",userId:6,email:"aruna@gmail.com",secretQuestion:"Which is your favorite city?",ans:"Coorg",
      userrole:"User",confpassword:"aruna@15"
    };
    let result :User []|any;
     userService.getUsername(userObj.username).subscribe(data=>
      {
        result = data;
        expect(result[0]).toEqual(userObj);
      })
    
    const ctrl = TestBed.inject(HttpTestingController);
    const mockHttp = ctrl.expectOne('http://localhost:5002/auth/v1/getuser/Aruna');
    const httpReq = mockHttp.request;

    expect(httpReq.method).toEqual('GET');
  });




});
