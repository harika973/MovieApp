import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from '../app-routing.module';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

import { BookTicketComponent } from './book-ticket.component';

describe('BookTicketComponent', () => {
  let component: BookTicketComponent;
  let fixture: ComponentFixture<BookTicketComponent>;
  let httpClient :HttpClient;
  let ticketObj:Ticket;
  let ticketService:TicketService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookTicketComponent ],
      imports:[HttpClientTestingModule,HttpClientModule,FormsModule,RouterTestingModule, MatCardModule,MatFormFieldModule,
        MatInputModule,BrowserAnimationsModule,MatTableModule,MatPaginatorModule,ReactiveFormsModule,AppRoutingModule,MatIconModule
      ,MatDialogModule],
      providers: [
        {
        provide: MAT_DIALOG_DATA,
        useValue:{}
        }
        ]
    })
    .compileComponents();

    httpClient = TestBed.inject(HttpClient);
    ticketService = TestBed.inject(TicketService);
    fixture = TestBed.createComponent(BookTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should not return http Post call',()=>
  {
    ticketObj =
    {
      numberOfSeats:5,seatNumber:"1-5",movie_id_fk:125,movieName:"F3",theatreName:"PVR",totalSeats:500,availableSeats:500,ticketId:5
    };

    ticketService.bookTicket(ticketObj,ticketObj.movie_id_fk).subscribe({
     error:(error)=>
      {
        expect(error).toBeTruthy();
        expect(error.status).withContext('status').toEqual(409);
      }
    });
    const ctrl = TestBed.inject(HttpTestingController);
    const mockHttp = ctrl.expectOne('http://localhost:5001/movie/api/book/125');
    const httpReq = mockHttp.request;

    mockHttp.flush("error request",{status:409, statusText:"Conflict"});
  });



});
