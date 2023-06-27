package com.harika.moviemicroservice;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.harika.moviemicroservice.controller.MovieController;
import com.harika.moviemicroservice.model.Movie;
import com.harika.moviemicroservice.service.MovieService;

@AutoConfigureMockMvc
@SpringBootTest
public class MovieControllerTest {
	
	@Mock
	private MovieService movieService;
	
	@InjectMocks
	private MovieController movieC;
	
	@Autowired
	private MockMvc mockMvc;
	
	
	@BeforeEach
	public void init()
	{
		MockitoAnnotations.openMocks(this);
		mockMvc = MockMvcBuilders.standaloneSetup(movieC).build();
	}

	List<Movie> movieList = new ArrayList<Movie>();
	
	@Test
	public void getAllMovieSuccess() throws Exception
	{
		
		Movie movie = new Movie();
		movie.setMovieId(123);
		movie.setMovieName("Dasara");
		movie.setStatus("BOOK ASAP");
		movie.setTheatreName("ANB-Cinemas");
		movie.setTicketList(null);
		movie.setTotalSeats(100);
		movie.setAvailableSeats(100);
		
		movieList.add(movie);
		when(movieService.getAllMovies()).thenReturn(movieList);
		
		List<Movie> mList = movieService.getAllMovies();
		assertEquals(movieList, mList);
		
		//mockMvc.perform(MockMvcRequestBuilders.get("/movie/api/getAllMovies").contentType(MediaType.APPLICATION_JSON))
			//.andExpect(MockMvcResultMatchers.status().isOk());
		
	}
	
	@Test
	public void getAllMovieFailure() throws Exception
	{
		movieList.clear();
		when(movieService.getAllMovies()).thenReturn(movieList);
		
		assertEquals(0,movieList.size());
		
		mockMvc.perform(MockMvcRequestBuilders.get("/movie/api/getAllMovies").contentType(MediaType.APPLICATION_JSON));

		
	}


}
