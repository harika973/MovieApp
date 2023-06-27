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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.harika.moviemicroservice.DataPublisherServiceImpl;
import com.harika.moviemicroservice.customResponse.ResponseHandler;
import com.harika.moviemicroservice.exceptions.DuplicateMovieIdException;
import com.harika.moviemicroservice.model.Movie;
import com.harika.moviemicroservice.model.Ticket;
import com.harika.moviemicroservice.service.MovieService;
import com.harika.moviemicroservice.service.TicketService;

@RestController
@RequestMapping("movie/api")
@CrossOrigin("*")
public class MovieController {

	@Autowired
	private MovieService movieService;
	
	@Autowired
	private TicketService ticketService;
	
	@Autowired
	private DataPublisherServiceImpl dp;
	
	@PostMapping("/addMovie")
	public ResponseEntity<?> addMovie(@RequestBody Movie movie) throws DuplicateMovieIdException
	{
		if(movieService.addMovie(movie)!=null)
		{
			String msg = movie.getMovieName();
			dp.setTemp(msg);
			return new ResponseEntity<Movie>(movie, HttpStatus.CREATED);
		}
		
		return new ResponseEntity<String>("Movie is not created in DB", HttpStatus.CONFLICT);
	}
	
	@GetMapping("/getAllMovies")
	public ResponseEntity<?> getBooks()
	{
		List<Movie> movielist = movieService.getAllMovies();
		if(movielist !=null)
		{
			for(Movie m :movielist){
				List<Ticket> bookings= ticketService.getAllTickets(m.getMovieId());
				m.setTicketList(bookings);
			}
			//return new ResponseEntity<List<Movie>>(movielist, HttpStatus.OK); 
			
			return new ResponseEntity<List<Movie>>(movielist,HttpStatus.OK);
			//return ResponseHandler.generateResponse("Successfully fetched movielist", HttpStatus.OK, movielist);
		}
		
		return new ResponseEntity<String>("Movielist is empty", HttpStatus.NO_CONTENT);
	}
	
	
	@GetMapping("/movieById/{mid}")
	public ResponseEntity<?> getMovieById(@PathVariable ("mid") int mid)
	{
		Movie movieexist = movieService.getMovieById(mid);
		
		if(movieexist !=null)
		{
			List<Ticket> bookings= ticketService.getAllTickets(mid);
			movieexist.setTicketList(bookings);
			return new ResponseEntity<Movie>(movieexist, HttpStatus.OK); 

		}
		return new ResponseEntity<String>("Movie record missing", HttpStatus.NO_CONTENT);
	}
	
	@DeleteMapping("/deletemovie/{mid}")
	public ResponseEntity<?> deleteMovie(@PathVariable("mid") int mid)
	{
		
		if(movieService.deleteMovie(mid) && ticketService.deleteTicket(mid))
		{
			return new ResponseEntity<Integer>(mid, HttpStatus.OK); 
		}
		return new ResponseEntity<String>("Movie Or Ticket record not deleted", HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@PutMapping("/updateMovie/{mid}")
	public ResponseEntity<?> updateMovie(@RequestBody Movie movie,@PathVariable("mid") int mid)
	{
		if(movieService.updateMovie(movie,mid))
		{
			return new ResponseEntity<Movie>(movie, HttpStatus.OK);
		}
		return new ResponseEntity<String>("Movie record not updated", HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
}
