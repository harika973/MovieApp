package com.harika.usermicroservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.harika.usermicroservice.model.Role;

@Repository
public interface RoleRepo extends JpaRepository<Role, String> {

}
