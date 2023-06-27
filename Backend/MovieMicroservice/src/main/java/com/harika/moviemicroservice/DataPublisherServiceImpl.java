package com.harika.moviemicroservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.harika.moviemicroservice.model.Movie;

@Service
public class DataPublisherServiceImpl 
{
	public static final String topic ="javarbp";
	
	//private Movie movie;
	
	@Autowired
	private KafkaTemplate<Movie, String> temp;

	public KafkaTemplate<Movie, String> getTemp() {
		return temp;
	}

	public void setTemp(String msg)
	{
		this.temp.send(topic,msg);
	}

	public static String getTopic() {
		return topic;
	}

	
	
	

}
