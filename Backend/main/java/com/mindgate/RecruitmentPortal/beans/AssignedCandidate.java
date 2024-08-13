package com.mindgate.RecruitmentPortal.beans;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="AssignedCandidate")
public class AssignedCandidate {
	
	@Id
	private int empId;
	
	private int jobId;
	
	private String name;
	
	private String skills;
	
	public AssignedCandidate() {
		// TODO Auto-generated constructor stub
	}

	public int getEmpId() {
		return empId;
	}

	public void setEmpId(int empId) {
		this.empId = empId;
	}

	public int getJobId() {
		return jobId;
	}

	public void setJobId(int jobId) {
		this.jobId = jobId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSkills() {
		return skills;
	}

	public void setSkills(String skills) {
		this.skills = skills;
	}

	public AssignedCandidate(int empId, int jobId, String name, String skills) {
		super();
		this.empId = empId;
		this.jobId = jobId;
		this.name = name;
		this.skills = skills;
	}
	
	
	
	

}
