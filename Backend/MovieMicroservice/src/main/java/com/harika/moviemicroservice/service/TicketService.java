package com.harika.moviemicroservice.service;

import java.util.List;
import java.util.Set;

import com.harika.moviemicroservice.model.Ticket;


public interface TicketService {

	public List<Ticket> getAllTickets(int movie_id_fk);
	
	public boolean addTicket(Ticket ticket);
	
	public boolean deleteTicket(int movieId);

	//public List<Ticket> getAllTickets();
	
}
