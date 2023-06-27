package com.harika.moviemicroservice;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import com.harika.moviemicroservice.model.Movie;
//import com.harika.moviemicroservice.model.Movie;
import com.harika.moviemicroservice.model.Ticket;

public class TicketTest {

	@Test
	public void test01() {
		Ticket ticketObj = Mockito.mock(Ticket.class);
		when(ticketObj.getMovieName()).thenReturn(null);
		
		List<String> ticketNewObj = new ArrayList<String>();
		ticketNewObj.add("Amigos");
		System.out.println(ticketNewObj);
		
	}
	
	@Test
	public void test02() {
		Ticket ticketObj = Mockito.mock(Ticket.class);// creating the mock object

		when(ticketObj.getMovieName()).thenReturn(null);
		Ticket ticket = new Ticket();
		
		String ticketNewObj = ticket.setMovieName("Hello");
		
		String mname = ticket.getMovieName();
		 
		 System.out.println(ticketNewObj); 
		 when(ticketObj.getMovieName()).thenReturn(ticketNewObj);
	
		 
		 assertEquals(ticketNewObj, mname);
	}
}
