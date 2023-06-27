package com.harika.usermicroservice.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.harika.usermicroservice.model.User;

@Repository
@Transactional
public interface UserRepo extends JpaRepository<User, Integer> {

	@Query(value="select u from User u where u.username= :username and u.password= :password")
	public User validateUser(String username, String password);//login
	
	
	public User findByUsername(String username);


	public User findByAns(String ans);
	

}
