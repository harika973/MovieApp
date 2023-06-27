package com.harika.moviemicroservice.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.harika.moviemicroservice.model.Movie;
import com.harika.moviemicroservice.model.Ticket;
import com.harika.moviemicroservice.repository.TicketRepo;


@Service
public class TicketServiceImpl implements TicketService {

	@Autowired
	private TicketRepo ticketRepo;


	@Override
	public boolean addTicket(Ticket ticket) {

		//sticket.setStatus("BOOK ASAP");
		ticketRepo.saveAndFlush(ticket);
		return true;
		
	}

	@Override
	public boolean deleteTicket(int movieId) {
		
		ticketRepo.deleteTicketData(movieId);
		return true;
	}

	@Override
	public List<Ticket> getAllTickets(int movie_id_fk) {
		
		List<Ticket> tl = ticketRepo.getTicketList(movie_id_fk);
		
		return tl;
	}


//	@Override
//	public List<Ticket> getAllTickets() {
//		List<Ticket> tickets  = ticketRepo.findAll();
//		return tickets;
//	}
	
}
