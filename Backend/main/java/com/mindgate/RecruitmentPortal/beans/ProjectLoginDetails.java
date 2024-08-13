package com.mindgate.RecruitmentPortal.beans;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="AdminTable")
public class ProjectLoginDetails{
	
	@Id
	private String username;
	
	private String password;
	
	private String type;
	
	private String email;

	

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public ProjectLoginDetails( String username, String password, String type, String email) {
		super();
		
		this.username = username;
		this.password = password;
		this.type = type;
		this.email = email;
	}
	
	public ProjectLoginDetails() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "ProjectLoginDetails [ username=" + username + ", password=" + password + ", type=" + type
				+ ", email=" + email + "]";
	}
	
	
	
	
	
	
	
	
	
	
}