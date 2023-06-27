import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbDateISOParserFormatter } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {

  save!: NgForm;
  movie:Movie = new Movie();
  data:{}|any;
  moviearr:Array<Movie>=[];
  constructor(private movieService:MovieService,private router:Router,public dialog: MatDialog){}

  addMovie(){
    this.movieService.addMovie(this.movie).subscribe(
      data =>{
        this.data= JSON.stringify(data);
        this.moviearr.push(this.data);
        alert("Movie Added Successfully");
        this.router.navigateByUrl("/homeadmin");
        console.log(data);
        
  })
}

view(){
  
   this.router.navigate(['/homeadmin']);
 }

}
