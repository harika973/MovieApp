package com.harika.moviemicroservice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.harika.moviemicroservice.exceptions.DuplicateMovieIdException;
import com.harika.moviemicroservice.model.Movie;
import com.harika.moviemicroservice.repository.MovieRepo;

@Service
public class MovieServiceImpl implements MovieService{
	
	@Autowired
	private MovieRepo movierepo;

	@Override
	public List<Movie> getAllMovies() {
		List<Movie> movielist = movierepo.findAll();
		if(movielist != null && movielist.size()>0) {
			return movielist;
		}
		return null;
	}

	@Override
	public Movie addMovie(Movie movie) throws DuplicateMovieIdException {
		Optional<Movie> mvObj = movierepo.findById(movie.getMovieId());
		if(mvObj.isPresent()) {
			throw new DuplicateMovieIdException();
		}
		movie.setAvailableSeats(movie.getTotalSeats());
		int availableSeats = movie.getAvailableSeats();
		if(availableSeats >0) {
			movie.setStatus("BOOK ASAP");
		}else {
			movie.setStatus("SOLD OUT");
		}
		//movie.setAvailableSeats(movie.getTotalSeats());
		return movierepo.saveAndFlush(movie);
	}

	@Override
	public boolean deleteMovie(int mid) {
		movierepo.deleteById(mid);
		return true;
	}

	//@SuppressWarnings("deprecation")
	@SuppressWarnings("unused")
	@Override
	public boolean updateMovie(Movie movie,int movieId) {
		@SuppressWarnings("deprecation")
		Movie movie1 = movierepo.getById(movieId);
		if(movie!=null) {
			movie1.setMovieId(movieId);
			movie1.setMovieName(movie.getMovieName());
			movie1.setTheatreName(movie.getTheatreName());
			//movie1.setTotalSeats(movie1.getTotalSeats());
			movie1.setAvailableSeats(movie.getAvailableSeats());
			
			//movie1.setAvailableSeats(movie.getAvailableSeats()+movie1.getAvailableSeats());
			//movie1.setTotalSeats(movie.getTotalSeats());
			if(movie1.getAvailableSeats()<=0) {
				movie1.setStatus("SOLD-OUT");
			}else {
				movie1.setStatus("BOOK ASAP");
			}
			movierepo.saveAndFlush(movie1);
			return true;
		}
		return false;
	}

	@Override
	public Movie getMovieById(int mid) {
		Optional<Movie> movie = movierepo.findById(mid);
		if(movie.isPresent()) {
			return movie.get();
		}
		return null;
	}

	

}
