import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent {

  msg="";

  movieId!:number;
  movie:Movie = new Movie();
  constructor(private movieService:MovieService,private router:Router,private route:ActivatedRoute){}


  ngOnInit() {
    this.movieId=this.route.snapshot.params['movieId'];
    this.movieService.getMovieById(this.movieId).subscribe((data)=>{
      this.movie=data;
    },(error:HttpErrorResponse)=>{
      console.log(error);
    })

  }

  updateMovie(){
    this.movieService.updateMovie(this.movie,this.movieId).subscribe(
      data=>{
        if(data.availableSeats<= data.totalSeats && data.availableSeats >=0){
        console.log(data);
        alert("Movie record is updated");
        this.router.navigateByUrl('/homeadmin');
        //window.location.reload();
        console.log(data);
        }else{
          alert("AvailableSeats Must be > 0 and less than total Seats");
          //this.msg="AVAILABLESEATS MUST BE<=TOTALSEATS AND AVAILABLESEATS > 0"; 
        }
      },
      (error)=>{
        alert("Please retry later");
        console.log(error);
      }
    );

  }

  view(){
    // this.reloadComponent(true)
     this.router.navigate(['/homeadmin']);
   }
  
}
