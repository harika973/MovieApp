package com.harika.usermicroservice;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.ArgumentMatchers.any;
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
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.harika.usermicroservice.model.User;
import com.harika.usermicroservice.repository.UserRepo;
import com.harika.usermicroservice.service.UserService;

@AutoConfigureMockMvc
@SpringBootTest
public class UserServiceTest {

	@Mock
	private UserRepo userRepo;
	
	@InjectMocks
	private UserService userService;
	
	@Autowired
	private MockMvc mockMvc;
	
	@BeforeEach
	public void init()
	{
		MockitoAnnotations.openMocks(this);
		mockMvc = MockMvcBuilders.standaloneSetup(userService).build();
	}

	List<User> userList = new ArrayList<User>();
	
	@Test
	public void getAllUsersSuccess() throws Exception
	{
		User user = new User();
		user.setUserId(101);
		user.setUsername("Keith");
		user.setEmail("abc@gmail.com");
		user.setPassword("qwerty");
		user.setRoles(null);
		user.setSecretQuestion("What is your fav food?");
		user.setAns("Biryani");
		
		userList.add(user);
		when(userRepo.findAll()).thenReturn(userList);
		
		List<User> uList = userService.getAllUsers();
		assertEquals(userList, uList);
		
	}
	
	@Test
	public void getAllUsersFailure() throws Exception
	{
		//when(userRepo.findAll()).thenReturn(null);
		
		List<User> uList = userService.getAllUsers();
		assertNull(uList);
		
	}
	
	
}
