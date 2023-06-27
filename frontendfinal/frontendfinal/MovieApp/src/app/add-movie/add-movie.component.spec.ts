import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import {HttpTestingController,HttpClientTestingModule} from '@angular/common/http/testing';
import { AddMovieComponent } from './add-movie.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from '../app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';



describe('AddMovieComponent', () => {
  
  let fixture: ComponentFixture<AddMovieComponent>;
  let component: AddMovieComponent;
  let movieObj:Movie;
  let httpClient :HttpClient;
  let movieService:MovieService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMovieComponent ],
      imports:[HttpClientTestingModule,HttpClientModule,FormsModule,RouterTestingModule, MatCardModule,MatFormFieldModule,
        MatInputModule,BrowserAnimationsModule,MatTableModule,MatDialogModule,MatPaginatorModule,ReactiveFormsModule,AppRoutingModule,MatIconModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpClient = TestBed.inject(HttpClient);
    movieService = TestBed.inject(MovieService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return http Post call',()=>
  {
    movieObj =
    {
      movieId:120, movieName:"F2", theatreName:"ABC-Cinemas", availableSeats:200, totalSeats:200,status:"BOOK ASAP"
    };

    movieService.addMovie(movieObj).subscribe({
     error:(error)=>
      {
        expect(error).toBeTruthy();
        expect(error.status).withContext('status').toEqual(409);
      }
    });
    const ctrl = TestBed.inject(HttpTestingController);
    const mockHttp = ctrl.expectOne('http://localhost:5001/movie/api/addMovie');
    const httpReq = mockHttp.request;

    mockHttp.flush("error request",{status:409, statusText:"Conflict"});
  });



});
