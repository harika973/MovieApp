package com.harika.usermicroservice.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Role {

	@Id
	private String roleName;
	private String roleDescription;
	public String getRoleName() {
		return roleName;
	}
	public String setRoleName(String roleName) {
		this.roleName = roleName;
		return roleName;
	}
	public String getRoleDescription() {
		return roleDescription;
	}
	public void setRoleDescription(String roleDescription) {
		this.roleDescription = roleDescription;
	}
	
	
}
