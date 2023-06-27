package com.harika.moviemicroservice;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.harika.moviemicroservice.model.Ticket;
import com.harika.moviemicroservice.repository.TicketRepo;

@SpringBootTest
public class TicketRepoTest {

	
	@Autowired
	private TicketRepo ticketRepo;
	
	
	private Ticket ticket = new Ticket();
	

	
	@Test
	public void saveTicketSuccess() throws Exception
	{
		
		ticket.setMovie_id_fk(130);
		ticket.setMovieName("Dhamaka");
		ticket.setNumberOfSeats(5);
		ticket.setSeatNumber("A-J");
		ticket.setTheatreName("Cine-Talkies");
		ticket.setTicketId(1);
		ticket.setTotalSeats(100);
		ticket.setAvailableSeats(100);
		ticketRepo.save(ticket);
		
		System.out.println(ticket);
		assertEquals("Dhamaka",ticket.getMovieName());
	}
	
	@Test
	public void saveTicketFailure() throws Exception
	{
		Ticket ticket1 = null;
		if(ticketRepo.findAll().toString().isEmpty())
		{
			ticketRepo.save(ticket);
			ticket1 = ticketRepo.findById(ticket.getMovie_id_fk()).get();
	
		}
	
		System.out.println(ticket1);
		assertNull(ticket1);
	}

}
