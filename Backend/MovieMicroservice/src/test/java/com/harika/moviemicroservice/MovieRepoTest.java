package com.harika.moviemicroservice;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.harika.moviemicroservice.model.Movie;
import com.harika.moviemicroservice.repository.MovieRepo;


@SpringBootTest
public class MovieRepoTest {
	
	@Autowired
	private MovieRepo movieRepo;
	
	
	private Movie movie = new Movie();
	


	
	@Test
	public void saveMovieSuccess() throws Exception
	{
		
		movie.setMovieId(121);
		movie.setMovieName("Hello");
		movie.setStatus("BOOK ASAP");
		movie.setTheatreName("ABC-Cinemas");
		movie.setTicketList(null);
		movie.setTotalSeats(200);
		movie.setAvailableSeats(200);
		
		movieRepo.save(movie);
		
		System.out.println(movie);
		assertEquals("Hello",movie.getMovieName());
	}
	
	@Test
	public void saveMovieFailure() throws Exception
	{
		Movie movie1=null;
		if(movieRepo.findAll().toString().isEmpty())
		{
			movieRepo.save(movie);
			movie1 = movieRepo.findById(movie.getMovieId()).get();
	
		}
	
		System.out.println(movie1);
		assertNull(movie1);
	}

}
