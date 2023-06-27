package com.harika.moviemicroservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.harika.moviemicroservice.customResponse.ResponseHandler;
import com.harika.moviemicroservice.model.Movie;
import com.harika.moviemicroservice.model.Ticket;
import com.harika.moviemicroservice.service.MovieService;
import com.harika.moviemicroservice.service.TicketService;

@RestController
@RequestMapping("movie/api")
@CrossOrigin("*")
public class TicketController {

	@Autowired
	private TicketService ts;
	
	@Autowired
	private MovieService ms;
	
	
	@PostMapping("/book/{mid}")
	public ResponseEntity<?> addTicket(@PathVariable ("mid") int movieId, @RequestBody Ticket ticket)
	{
		
		Movie existMovie = ms.getMovieById(movieId);
		
		if(existMovie !=null)
		{
//			int availableSeats = existMovie.getAvailableSeats();
//			if(availableSeats>0) {
			int numberOfSeats = ticket.getNumberOfSeats();
			if(numberOfSeats>0 && numberOfSeats<=existMovie.getAvailableSeats()) {
				ticket.setTotalSeats(existMovie.getTotalSeats());
				//ticket.setAvailableSeats(existMovie.getAvailableSeats());
				ticket.setAvailableSeats(existMovie.getAvailableSeats()-ticket.getNumberOfSeats());
				//ticket.setTotalSeats(existMovie.getAvailableSeats()- ticket.getNumberOfSeats());
				ticket.setMovieName(existMovie.getMovieName());
				ticket.setTheatreName(existMovie.getTheatreName());
				ticket.setMovie_id_fk(existMovie.getMovieId());
				//ticket.setTotalSeats(existMovie.getTotalSeats()-ticket.getNumberOfSeats());
				//existMovie.setAvailableSeats(ticket.getTotalSeats());
				existMovie.setAvailableSeats(ticket.getAvailableSeats());
				if(existMovie.getAvailableSeats()==0) {
					existMovie.setStatus("SOLD OUT");
				}
				if(ts.addTicket(ticket))
				{
					//ticket.setStatus("BOOK ASAP");
					return new ResponseEntity<Ticket>(ticket, HttpStatus.CREATED);
					
				}
			}else {
				ticket.setTotalSeats(existMovie.getTotalSeats());
				ticket.setAvailableSeats(existMovie.getAvailableSeats());
				ticket.setMovie_id_fk(existMovie.getMovieId());
				ticket.setMovieName(existMovie.getMovieName());
				ticket.setTheatreName(existMovie.getTheatreName());
				//ticket.setStatus("SOLD OUT");
				ticket.setNumberOfSeats(0);
				ticket.setSeatNumber("NULL");
				
				return new ResponseEntity<Ticket>(ticket,HttpStatus.NOT_ACCEPTABLE);
			}
			
			
		}
		
		return new ResponseEntity<String>("Ticket Could not be booked", HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@GetMapping("/alltickets/{mid}")
	public ResponseEntity<?> getTickets(@PathVariable ("mid") int movieId){
		List<Ticket> allTickets = ts.getAllTickets(movieId);
		if(allTickets!=null) {
			return new ResponseEntity<List<Ticket>>(allTickets, HttpStatus.OK); 
		}
		return new ResponseEntity<String>("List is Empty",HttpStatus.NO_CONTENT);
	}
	

	@DeleteMapping("/delete/{mid}")
	public ResponseEntity<?> deleteTicket(@PathVariable ("mid") int movieId){
		boolean dt = ts.deleteTicket(movieId);
		if(dt) {
			return new ResponseEntity<String>("Ticket Record Deleted",HttpStatus.OK);
		}
		return new ResponseEntity<String>("Ticket Record not deleted",HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
