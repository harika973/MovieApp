package com.harika.moviemicroservice.service;

import java.util.List;

import com.harika.moviemicroservice.exceptions.DuplicateMovieIdException;
import com.harika.moviemicroservice.model.Movie;

public interface MovieService {
	 
	public List<Movie> getAllMovies();
	
	public Movie addMovie(Movie movie) throws DuplicateMovieIdException;
	
	public boolean deleteMovie(int mid);
	
	public boolean updateMovie(Movie movie,int mid);
	
	public Movie getMovieById(int mid);

	

}
