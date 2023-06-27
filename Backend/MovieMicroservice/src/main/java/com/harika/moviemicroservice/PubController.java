package com.harika.moviemicroservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.harika.moviemicroservice.model.Movie;

@RestController
@RequestMapping("/publisher")
public class PubController 
{
//	@Autowired
//	DataPublisherServiceImpl dp;
//	
//	
//	@PostMapping("/produce")
//	public void publishMsg(@RequestBody Movie movie)
//	{
//		String name = movie.getMovieName();
//		dp.setTemp(name);
//	}

}
