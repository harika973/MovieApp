import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Ticket } from './ticket';

import { TicketService } from './ticket.service';

describe('TicketService', () => {
  let service: TicketService;
  let ticketObj:Ticket;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,HttpClientModule,FormsModule,RouterTestingModule, MatCardModule,MatFormFieldModule,
        MatInputModule,BrowserAnimationsModule,MatTableModule,MatDialogModule,MatPaginatorModule,ReactiveFormsModule,
        MatToolbarModule,MatIconModule]
    });
    service = TestBed.inject(TicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should book ticker',()=>{
    ticketObj={
      ticketId:24,movie_id_fk:126,movieName:"Bahubali",theatreName:"PVR",availableSeats:430,totalSeats:500,
      numberOfSeats:5,seatNumber:"5-10"
    };
    let response:Ticket[]|any;
    spyOn(service,'bookTicket').and.returnValue(of(response));

    service.bookTicket(ticketObj,ticketObj.movie_id_fk).subscribe(data=>{
      expect(data).toEqual(response);
    })
  })


  it('should get all tickets by id',()=>{
    let response:Ticket[]|any;
    spyOn(service,'viewTicketsByMovie').and.returnValue(of(response));
    service.viewTicketsByMovie(24).subscribe(data=>{
      expect(data).toEqual(response);
    })
  })


});
