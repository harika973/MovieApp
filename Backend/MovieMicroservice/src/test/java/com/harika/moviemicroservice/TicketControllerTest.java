package com.harika.moviemicroservice;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import com.harika.moviemicroservice.controller.TicketController;
import com.harika.moviemicroservice.model.Ticket;
import com.harika.moviemicroservice.service.TicketService;

@AutoConfigureMockMvc
@SpringBootTest
public class TicketControllerTest {
	
	@Mock
	private TicketService ticketService;
	
	@InjectMocks
	private TicketController ticketC;
	
	@Autowired
	private MockMvc mockMvc;
	
	
	@BeforeEach
	public void init()
	{
		MockitoAnnotations.openMocks(this);
		mockMvc = MockMvcBuilders.standaloneSetup(ticketC).build();
	}

	List<Ticket> ticketList = new ArrayList<Ticket>();
	
	
	@Test
	public void getAllTicketFailure() throws Exception
	{
		ticketList.clear();
		when(ticketService.getAllTickets(131)).thenReturn(ticketList);
		
		assertEquals(0,ticketList.size());
		
		mockMvc.perform(MockMvcRequestBuilders.get("/movie/api/alltickets/130").contentType(MediaType.APPLICATION_JSON));

		
	}


}
