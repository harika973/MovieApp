import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BookTicketComponent } from '../book-ticket/book-ticket.component';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit,AfterViewInit{


  data:{}|any; movieObj:Movie = new Movie();
  moviearr:Array<Movie>=[];
  //public dataSource:[] |any;

  //movies!: Movie[];
  public dataSource = new MatTableDataSource<Movie>;
  displayedColumns: string[] = ['movieId', 'movieName', 'theatreName', 'totalSeats','availableSeats','status','action'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator |any;
  @ViewChild(MatSort) sort: MatSort |any;
  applyFilter(event: Event) {
   // console.log(this.dataSource);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
   // console.log(this.dataSource);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  constructor(private router:Router,private movieService:MovieService,
    public dialog: MatDialog){}

  ngOnInit(): void {
   this.getAllMoviesForUser();
   
  }

  getAllMoviesForUser(){
    this.movieService.getAllMovies().subscribe(data=>{
      //this.movies=data;
      // this.dataSource.data=this.movies;
      this.moviearr = Object.values(data);
      this.dataSource.data= this.moviearr;
      console.log(data);
    })
  }

  viewTickets(movieId:number){
    this.router.navigate(['/viewTickets',movieId]);
}


bookTickets(movieId:number){
  this.dialog.open(BookTicketComponent,{
    data:{
      id:movieId,
    }
    });
 }






  
}
