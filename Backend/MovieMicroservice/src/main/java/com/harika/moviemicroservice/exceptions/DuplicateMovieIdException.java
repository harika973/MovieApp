package com.harika.moviemicroservice.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@SuppressWarnings("serial")
@ResponseStatus(code=HttpStatus.CONFLICT,reason = "Movie Id already Exists,handled by custom exception")
public class DuplicateMovieIdException extends Exception{

	
}
