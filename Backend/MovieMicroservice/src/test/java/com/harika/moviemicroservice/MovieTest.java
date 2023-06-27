package com.harika.moviemicroservice;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import com.harika.moviemicroservice.model.Movie;


public class MovieTest {
	
	@Test
	public void test01(){
		Movie movieObj = Mockito.mock(Movie.class);// creating the mock object

		when(movieObj.getMovieName()).thenReturn(null);

		List<String> movieNewObj = new ArrayList<String>();

		movieNewObj.add("MisMatched");
		System.out.println(movieNewObj);
	}
	
	@Test
	public void test02() {
		Movie movieObj = Mockito.mock(Movie.class);// creating the mock object

		when(movieObj.getMovieName()).thenReturn(null);
		Movie movie = new Movie();
		
		String movieNewObj = movie.setMovieName("Never Have I Ever");
		
		String mname = movie.getMovieName();
		 
		 System.out.println(movieNewObj); 
		 when(movieObj.getMovieName()).thenReturn(movieNewObj);
	
		 
		 assertEquals(movieNewObj, mname);
		
	}

}
