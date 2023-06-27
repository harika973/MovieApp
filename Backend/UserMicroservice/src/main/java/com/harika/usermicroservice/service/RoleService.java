package com.harika.usermicroservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.harika.usermicroservice.model.Role;
import com.harika.usermicroservice.repository.RoleRepo;

@Service
public class RoleService {

	@Autowired
    private RoleRepo roleRepo;

    public Role createNewRole(Role role) {
        return roleRepo.save(role);
    }
}
