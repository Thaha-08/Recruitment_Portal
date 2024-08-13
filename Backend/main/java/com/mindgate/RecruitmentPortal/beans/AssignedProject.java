package com.mindgate.RecruitmentPortal.beans;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="ProjectAssignedTable")
public class AssignedProject {
	@Id
	private int  jobId;
	
	private String  jobRole;
	
	@Column(name=" empId")
	private int empId;
	
	private String empname;

	public int getJobId() {
		return jobId;
	}

	public void setJobId(int jobId) {
		this.jobId = jobId;
	}

	public String getJobRole() {
		return jobRole;
	}

	public void setJobRole(String jobRole) {
		this.jobRole = jobRole;
	}

	public int getEmpId() {
		return empId;
	}

	public void setEmpId(int empId) {
		this.empId = empId;
	}

	public String getEmpname() {
		return empname;
	}

	public void setEmpname(String empname) {
		this.empname = empname;
	}

	public AssignedProject(int jobId, String jobRole, int empId, String empname) {
		super();
		this.jobId = jobId;
		this.jobRole = jobRole;
		this.empId = empId;
		this.empname = empname;
	}
	
	public AssignedProject() {
		
	}
	
}
