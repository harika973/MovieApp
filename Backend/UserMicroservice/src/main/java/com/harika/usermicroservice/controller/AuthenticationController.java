package com.harika.usermicroservice.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties.Jwt;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.harika.usermicroservice.model.User;
import com.harika.usermicroservice.repository.UserRepo;
import com.harika.usermicroservice.service.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;


@RequestMapping("auth/v1")
@RestController
@CrossOrigin("*")
public class AuthenticationController 
{
	
	@Autowired
	private UserRepo userRepo;
	
	private Map<String,String> mapObj = new HashMap<String,String>();
	
	@Autowired
	private UserService userService;
	

	@PostMapping("/addUser")
	public ResponseEntity<?> registerUser(@RequestBody User user)
	{
		if(userService.addUser(user)!=null)
		{
			return new ResponseEntity<User>(user, HttpStatus.CREATED);
		}
		return new ResponseEntity<String>("User not registered", HttpStatus.CONFLICT);
	}
	
	
	public String generateToken(String username, String password) throws ServletException, Exception
	{
		String jwtToken;
		
		if(username==null || password == null)
		{
			throw new ServletException("Please enter valid username and password");
		}
		
		boolean flag= userService.loginUser(username, password);
		
		if(!flag)
		{
			throw new ServletException("Invalid credentials");
			
		}
		else
		{
			jwtToken= Jwts.builder().setSubject(username).setIssuedAt(new Date())
						.setExpiration(new Date(System.currentTimeMillis()+ 3000000))
						.signWith(SignatureAlgorithm.HS256, "secret key").compact();
		}
		
		return jwtToken;
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> performLogin(@RequestBody User user)
	
	{
		
		try
		{
			User u = userRepo.findByUsername(user.getUsername());
			System.out.println("test" + u.getUserrole());
			if ((user.getUsername().equals(u.getUsername())) && (user.getPassword().equals(u.getPassword()))) {

				String userrole = u.getUserrole();
				

				String jwtToken = generateToken(user.getUsername(), user.getPassword());

				mapObj.put("role", userrole);
				mapObj.put("message", "User successfully logged in");
				mapObj.put("jwtToken", jwtToken);
			}
			
		}
		catch(Exception e)
		{
			//if (!((user.getUsername().equals(u.getUsername())) && (user.getPassword().equals(u.getPassword())))) {

				mapObj.put("role", null);
				mapObj.put("message", "User not logged in");
				mapObj.put("jwtToken", null);
			//}
		}
		
		return new ResponseEntity<>(mapObj, HttpStatus.CREATED);
	}
	
	
	
	
	
	@PutMapping("/updateps/{userId}")
	public ResponseEntity<?> updateps(@PathVariable int userId,@RequestBody User user){
		if(userService.updatePassword(userId, user)) {
			return new ResponseEntity<Integer>(userId,HttpStatus.OK);
		}
		return new ResponseEntity<String>("password not updated",HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	
	@GetMapping("/getById/{userId}")
	public ResponseEntity<?> getUserById(@PathVariable int userId) {
		User u =userService.getUserById(userId);
		if(u!=null) {
			return new ResponseEntity<User>(u,HttpStatus.OK);
			
		}
		return new ResponseEntity<String>("Ans Not Matched",HttpStatus.INTERNAL_SERVER_ERROR);
		
	}
	
	
	
	
	
	
	@GetMapping("/getuser/{username}")
	public ResponseEntity<?> getUsername(@PathVariable String username) {
		User u1 =userService.getUserByUserName(username);
		if(u1!=null) {
			return new ResponseEntity<User>(u1,HttpStatus.OK);
		}
		return new ResponseEntity<String>("User name is incorrect",HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	
	
	
	
//	@GetMapping("/getdetails/{ans}")
//	public User getAns(@PathVariable String ans) {
//		return userService.getUserByAns(ans);
//	}
	
//	@GetMapping("/getdetails/{ans}")
//	public ResponseEntity<?> getAns(@PathVariable String ans) {
//		User user =userService.getUserByAns(ans);
//		if(user!=null) {
//			return new ResponseEntity<User>(user,HttpStatus.OK);
//		}
//		return new ResponseEntity<String>("Ans Not Matched",HttpStatus.INTERNAL_SERVER_ERROR);
//	}

	
}















