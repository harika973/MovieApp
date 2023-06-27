package com.harika.usermicroservice;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import com.harika.usermicroservice.model.User;


public class UserTest {

	

	@Test
	public void test01()
	{
		User userObj = Mockito.mock(User.class);// creating the mock object
		
		when(userObj.getUsername()).thenReturn(null);
		
		List<String> userNewObj = new ArrayList<String>();
		
		userNewObj.add("Rajesh");
		
		System.out.println(userNewObj);
		
		
		
	}
	
	
	@Test
	public void test02()
	{
		User userObj = Mockito.mock(User.class);// creating the mock object
		
		when(userObj.getUsername()).thenReturn(null);
		
		User user = new User();
		
		String userNewObj = user.setUsername("Keerthi");
		
	
		 
		String uname = user.getUsername();
		 
		 System.out.println(userNewObj); 
		 when(userObj.getUsername()).thenReturn(userNewObj);
	
		 
		 assertEquals(userNewObj, uname);
		
		
	}
}
