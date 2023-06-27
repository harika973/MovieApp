import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements AfterViewInit,OnInit{


  data:{}|any; movieObj:Movie = new Movie();
  moviearr:Array<Movie>=[];


  //movies!: Movie[];
  displayedColumns: string[] = ['movieId', 'movieName', 'theatreName', 'totalSeats','availableSeats','status','action'];
  public dataSource = new MatTableDataSource<Movie>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
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
   this.getAllMoviesForAdmin();
  }

  

   public getAllMoviesForAdmin(){
   this.movieService.getAllMovies().subscribe(data=>{
       
      this.moviearr = Object.values(data);
      this.dataSource .data= this.moviearr;
      console.log(data);
    })
  }



  viewTickets(movieId:number){
    this.router.navigate(['/viewTickets',movieId]);
  }


delete(movieId:number){
  this.movieService.deleteMovie(movieId).subscribe(data=>{
    let mindex = this.moviearr.findIndex(c=>c.movieId==movieId);
    this.moviearr.splice(mindex,1);
    alert("Tickets Will also be deleted");
    //window.location.reload();
    this.getAllMoviesForAdmin();
    console.log(data);
  })
}




    public getRole(){
      const  RoleObj =localStorage.getItem('role');
      
   
     return RoleObj;
   }
   
     public getToken(){
       const  token =localStorage.getItem('jwtToken');
       
      return token;
    }

}
