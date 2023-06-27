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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

import { ViewticketsComponent } from './viewtickets.component';

describe('ViewticketsComponent', () => {
  let component: ViewticketsComponent;
  let fixture: ComponentFixture<ViewticketsComponent>;
  let ticketObj:Ticket;
  let ticketService:TicketService;
  let httpClient:HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewticketsComponent ],
      imports:[HttpClientTestingModule,HttpClientModule,FormsModule,RouterTestingModule, MatCardModule,MatFormFieldModule,
        MatInputModule,BrowserAnimationsModule,MatTableModule,MatDialogModule,MatPaginatorModule,ReactiveFormsModule,
      MatSelectModule,MatIconModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewticketsComponent);
    ticketService=TestBed.inject(TicketService);
    httpClient=TestBed.inject(HttpClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should return http Get call',()=>
  {
    ticketObj =
    {
      ticketId:43,movie_id_fk:129,movieName:"Dead-Pixels",theatreName:"PVR",availableSeats:760,totalSeats:760,
      numberOfSeats:5,seatNumber:"1-5"
    };
 let result :Ticket []|any;
 ticketService.viewTicketsByMovie(ticketObj.movie_id_fk).subscribe({
  next:(response)=>
  {
    expect(response).toBeTruthy();
    //expect(response.movieId).toEqual(65);
  }
});
    
    const ctrl = TestBed.inject(HttpTestingController);
    const mockHttp = ctrl.expectOne('http://localhost:5001/movie/api/alltickets/129');
    const httpReq = mockHttp.request;

    expect(httpReq.method).toEqual('GET');
  });




});
