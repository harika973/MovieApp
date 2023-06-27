import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';
import { TicketdetailsComponent } from '../ticketdetails/ticketdetails.component';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent {
  ticket=new Ticket;
  movie: Movie = new Movie();

  movieId!:number;
  constructor(private ticketService:TicketService,private router:Router,private route:ActivatedRoute,private movieService:MovieService,
    @Inject(MAT_DIALOG_DATA) public data: any,public dialog: MatDialog){}

  ngOnInit() :void{
    this.movieId=this.data.id;
    this.movieService.getMovieById(this.movieId).subscribe((data)=>{
      this.movie=data;
    },(error:HttpErrorResponse)=>{
      console.log(error);
    })

   
  }

  bookTicket(){
    this.ticket.movie_id_fk=this.movie.movieId;
    this.ticketService.bookTicket(this.ticket,this.movieId).subscribe(
      data =>{
        alert("Tickets Booked Successfully")
        //this.router.navigate(['/homeuser']);
        // window.location.reload();
        console.log(data);

        //this.router.navigate(['/ticketdetails']);
        
         this.dialog.open(TicketdetailsComponent,{
            data:{
              id:data.movie_id_fk,
              mname:data.movieName,
              tname:data.theatreName,
              tseats:data.totalSeats,
              aseats:data.availableSeats,
              ns:data.numberOfSeats,
              seatno:data.seatNumber
            }
        });
        //window.location.reload();
  },error=>{
    alert("Tickets Not booked. Please try again");
  });
}



}
