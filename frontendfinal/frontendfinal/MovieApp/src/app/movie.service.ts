import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //movies:Movie[] |any;

  constructor(private http:HttpClient) { }


  public addMovie(movie:Movie){
    return this.http.post<Movie>("http://localhost:5001/movie/api/addMovie", movie);
  }

  // public addMovie(movie:Movie){
  //   return this.http.post<Movie>("https://d1pqgzvzn1.execute-api.us-west-2.amazonaws.com/DeploymentMovie/addmovie", movie);
  // }

   public getAllMovies(){
     return this.http.get<Movie[]>("http://localhost:5001/movie/api/getAllMovies");
   }



   public getMovieById(movieId :number):Observable<any>{
    return this.http.get<any>("http://localhost:5001/movie/api/movieById/"+movieId);
  }


  public updateMovie(movie:Movie,movieId:number){
    return this.http.put<Movie>(`http://localhost:5001/movie/api/updateMovie/${movieId}`,movie);
  }


  public deleteMovie(movieId:number ):Observable<any>{
    return this.http.delete<any>("http://localhost:5001/movie/api/deletemovie/"+movieId);
  }


  // public getAllMovies():Observable<Array<Movie>>{
  //   return this.http.get<Array<Movie>>("https://d1pqgzvzn1.execute-api.us-west-2.amazonaws.com/DeploymentMovie/getmovies");
  // }

  // public getMovieById(movieId :number):Observable<any>{
  //   return this.http.get<any>(" https://d1pqgzvzn1.execute-api.us-west-2.amazonaws.com/DeploymentMovie/getmoviebyid/"+movieId);
  // }

  // public updateMovie(movie:Movie,movieId:number){
  //   return this.http.put<Movie>(`https://d1pqgzvzn1.execute-api.us-west-2.amazonaws.com/DeploymentMovie/updatemovie/${movieId}`,movie);
  // }

  // public deleteMovie(movieId:number ):Observable<any>{
  //   return this.http.delete<any>("https://d1pqgzvzn1.execute-api.us-west-2.amazonaws.com/DeploymentMovie/getmoviebyid/"+movieId);
  // }




}

