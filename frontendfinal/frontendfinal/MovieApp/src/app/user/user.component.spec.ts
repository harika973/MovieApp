import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  let movieService: MovieService;
  let httpClient :HttpClient;
  let movieObj: Movie;


  beforeEach(async () => {
    UserComponent.prototype.ngOnInit=()=>{};
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports:[HttpClientTestingModule,HttpClientModule,FormsModule,RouterTestingModule, MatCardModule,MatFormFieldModule,
        MatInputModule,BrowserAnimationsModule,MatTableModule,MatDialogModule,MatPaginatorModule,ReactiveFormsModule]
    })
    .compileComponents();

    httpClient = TestBed.inject(HttpClient);
    movieService = TestBed.inject(MovieService);
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should return http Get call',()=>
  {
    movieObj =
    {
      movieId:180, movieName:"Sethu", theatreName:"ANB-Cinemas",totalSeats:850, availableSeats:850,status:"BOOK ASAP"
    };
 let result :Movie []|any;
      movieService.getAllMovies().subscribe(data=>
      {
        result = data;
        expect(result[0]).toEqual(movieObj);
      })
    
    const ctrl = TestBed.inject(HttpTestingController);
    const mockHttp = ctrl.expectOne('http://localhost:5001/movie/api/getAllMovies');
    const httpReq = mockHttp.request;

    expect(httpReq.method).toEqual('GET');
  });



});
