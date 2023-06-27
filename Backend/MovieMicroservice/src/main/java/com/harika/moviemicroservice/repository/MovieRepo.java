package com.harika.moviemicroservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.harika.moviemicroservice.model.Movie;

@Repository
public interface MovieRepo extends JpaRepository<Movie, Integer> {

}
