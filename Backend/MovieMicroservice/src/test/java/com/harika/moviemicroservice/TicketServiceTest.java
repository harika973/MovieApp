package com.harika.moviemicroservice;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.harika.moviemicroservice.model.Ticket;
import com.harika.moviemicroservice.repository.TicketRepo;
import com.harika.moviemicroservice.service.TicketServiceImpl;


@SpringBootTest
public class TicketServiceTest {
	
	@Mock
	private TicketRepo ticketRepo;
	
	@InjectMocks
	private TicketServiceImpl ticketService;
	
	
	List<Ticket> ticketList = new ArrayList<Ticket>();
	
	@Test
	public void getAllTicketFailure() throws Exception
	{
		Ticket ticket = new Ticket();
		ticket.setMovie_id_fk(125);
		ticket.setMovieName("Amigos");
		ticket.setTheatreName("ABC-Cinemas");
		ticket.setNumberOfSeats(5);
		ticket.setTicketId(100);
		ticket.setTotalSeats(200);
		ticket.setAvailableSeats(200);
		ticket.setSeatNumber("A-J");
		
		ticketList.add(ticket);
		when(ticketRepo.findAll()).thenReturn(ticketList);
		
		List<Ticket> tList = ticketService.getAllTickets(125);
		System.out.println(ticketList);
		
		System.out.println(tList);
		
		assertNotEquals(ticketList, tList);
		
		
	}

}
