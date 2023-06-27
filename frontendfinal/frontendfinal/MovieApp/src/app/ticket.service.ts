import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private http:HttpClient) { }


  public bookTicket(ticket:Ticket,movie_id_fk:number){
    return this.http.post<Ticket>("http://localhost:5001/movie/api/book/"+movie_id_fk,ticket);
  }


  public viewTicketsByMovie(movie_id_fk:number){
    return this.http.get<Ticket[]>("http://localhost:5001/movie/api/alltickets/"+movie_id_fk);
  }


  public deleteTicket(movie_id_fk:number ){
    return this.http.delete<Ticket>(" http://localhost:5001/movie/api/delete/"+movie_id_fk);
  }

  // public bookTicket(ticket:Ticket,movie_id_fk:number){
  //   return this.http.post<Ticket>("https://d1pqgzvzn1.execute-api.us-west-2.amazonaws.com/DeploymentMovie/booktickets/"+movie_id_fk,ticket);
  // }

  // public viewTicketsByMovie(movie_id_fk:number){
  //   return this.http.get<Ticket[]>("https://d1pqgzvzn1.execute-api.us-west-2.amazonaws.com/DeploymentMovie/booktickets/"+movie_id_fk);
  // }

  // public deleteTicket(movie_id_fk:number ){
  //   return this.http.delete<Ticket>(" https://d1pqgzvzn1.execute-api.us-west-2.amazonaws.com/DeploymentMovie/booktickets/"+movie_id_fk);
  // }
}
