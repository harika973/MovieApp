package com.harika.usermicroservice.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.harika.usermicroservice.model.Role;
import com.harika.usermicroservice.model.User;
import com.harika.usermicroservice.repository.RoleRepo;
import com.harika.usermicroservice.repository.UserRepo;

@Service
public class UserService {
	
	@Autowired
	private UserRepo userRepo;

	
	@Autowired
	private RoleRepo roleRepo;
	
	
	public List<User> getAllUsers() {
		List<User> userList = userRepo.findAll();

		if (userList != null & userList.size() > 0) {
			return userList;
		} else
			return null;
	}

	public void initRoleAndUser() {
		Role adminRole = new Role();
        adminRole.setRoleName("Admin");
        adminRole.setRoleDescription("Admin role");
        roleRepo.save(adminRole);

        Role userRole = new Role();
        userRole.setRoleName("User");
        userRole.setRoleDescription("Default role for newly created record");
        roleRepo.save(userRole);
        
//        User adminUser = new User();
//       	Set<Role> adminRoles = new HashSet<>();
//        adminRoles.add(adminRole);
//        adminUser.setRoles(adminRoles);
//        userRepo.save(adminUser);
	}


	
	public User addUser(User user) {
		Role role = roleRepo.findById("User").get();
		Set<Role> userRoles = new HashSet<>();
		userRoles.add(role);
		user.setRoles(userRoles);
		user.setUserrole("User");
		if(user!=null)
		{
			return userRepo.saveAndFlush(user);
			
		}
		return null;
	}
	

	public boolean loginUser(String username, String password) {
		
		User user1 = userRepo.validateUser(username, password);
		System.out.println("User: "+ user1.getUsername());
		if(user1!=null)
		{
			return true;
		}
		return false;
	}
	

	
	public boolean updatePassword(int userId,User user) {
		User u1=userRepo.findById(userId).orElse(null);
		u1.setPassword(user.getPassword());
		userRepo.saveAndFlush(u1);
		return true;
	}

	
	public User getUserById(int userId) {
		User user=userRepo.findById(userId).orElse(null);
		return user;
	}
	
	
	public User getUserByUserName(String username) {
		User user=userRepo.findByUsername(username);
		return user;
	}
	
	



}
