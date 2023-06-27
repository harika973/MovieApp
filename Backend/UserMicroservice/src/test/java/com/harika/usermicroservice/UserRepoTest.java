package com.harika.usermicroservice;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;

import com.harika.usermicroservice.model.User;
import com.harika.usermicroservice.repository.UserRepo;



@SpringBootTest
public class UserRepoTest {

	@Autowired
	private UserRepo userRepo;
	
	//private User user = new User();// real object
	private User user = new User();
	

	
	@Test
	public void saveUserSuccess() throws Exception
	{
		
		user.setUserId(101);
		user.setUsername("Keerthi");
		user.setPassword("12345");
		user.setSecretQuestion("What is your Fav Food");
		user.setAns("Biryani");
		user.setRoles(null);
		
		
		userRepo.save(user);

		
		System.out.println(user);
		assertEquals("Keerthi",user.getUsername());
	}
	
	@Test
	public void saveUserFailure() throws Exception
	{
		User user1 = null;
		
		if(userRepo.findAll().toString().isEmpty())
		{
			userRepo.save(user);
			user1 = userRepo.findById(user.getUserId()).get();
	
		}
	
		assertNull(user1);
	}

}
