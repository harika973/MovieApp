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
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

import { UpdateMovieComponent } from './update-movie.component';

describe('UpdateMovieComponent', () => {
  let component: UpdateMovieComponent;
  let fixture: ComponentFixture<UpdateMovieComponent>;
  let movieObj:Movie;
  let movieservice:MovieService;
  let httpClient:HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMovieComponent ],
      imports:[HttpClientTestingModule,HttpClientModule,FormsModule,RouterTestingModule, MatCardModule,MatFormFieldModule,
        MatInputModule,BrowserAnimationsModule,MatTableModule,MatDialogModule,MatPaginatorModule,ReactiveFormsModule,
      MatSelectModule,MatIconModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMovieComponent);
    movieservice=TestBed.inject(MovieService);
    httpClient=TestBed.inject(HttpClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should return http Put call',()=>
  {
    movieObj =

    {
      movieId:65, movieName:"Sahoo", theatreName:"SV cinemas", availableSeats:100, totalSeats:100,status:"BOOK ASAP"

    };
    movieservice.updateMovie(movieObj,movieObj.movieId).subscribe({
      next:(response)=>
      {
        expect(response).toBeTruthy();
        expect(response.movieId).toEqual(65);
      }
    });

    const ctrl = TestBed.inject(HttpTestingController);

    const mockHttp = ctrl.expectOne('http://localhost:5001/movie/api/updateMovie/65');

    const httpReq = mockHttp.request;
    expect(httpReq.method).toEqual('PUT');

  });


});
