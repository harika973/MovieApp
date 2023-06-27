package com.harika.moviemicroservice;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.harika.moviemicroservice.model.Movie;
import com.harika.moviemicroservice.repository.MovieRepo;
import com.harika.moviemicroservice.service.MovieServiceImpl;


@AutoConfigureMockMvc
@SpringBootTest
public class MovieServiceTest {
	

	@Mock
	private MovieRepo movieRepo;
	
	@InjectMocks
	private MovieServiceImpl movieService;
	
	@BeforeEach
	public void init()
	{
		MockitoAnnotations.openMocks(this);
		MockMvcBuilders.standaloneSetup(movieService).build();
	}

	List<Movie> movieList = new ArrayList<Movie>();
	
	@Test
	public void getAllMoviesSuccess() throws Exception
	{
		Movie movie = new Movie();
		movie.setMovieId(120);
		movie.setMovieName("Dasara");
		movie.setStatus("BOOK ASAP");
		movie.setTheatreName("ANB-Cinemas");
		movie.setTicketList(null);
		movie.setTotalSeats(100);
		movie.setAvailableSeats(100);
		
		
		movieList.add(movie);
		when(movieRepo.findAll()).thenReturn(movieList);
		
		List<Movie> mList = movieService.getAllMovies();
		assertEquals(movieList, mList);
		
	}
	
	@Test
	public void getAllMovieFailures() throws Exception
	{
		when(movieRepo.findAll()).thenReturn(null);
		
		List<Movie> mList = movieService.getAllMovies();
		assertNull(mList);
		
	}
	

}
