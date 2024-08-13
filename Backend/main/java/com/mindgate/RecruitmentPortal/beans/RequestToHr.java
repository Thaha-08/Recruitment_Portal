package com.mindgate.RecruitmentPortal.beans;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name=" RequestToHr")
public class RequestToHr {
	
	@Id
	@Column(name="jobId")
	private int jobId;
	
	private String jobRole;
	
	private int experience;
	
	private String location;
	
	

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

	public int getExperience() {
		return experience;
	}

	public void setExperience(int experience) {
		this.experience = experience;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public RequestToHr(int jobId, String jobRole, int experience, String location) {
		super();
		this.jobId = jobId;
		this.jobRole = jobRole;
		this.experience = experience;
		this.location = location;
	}
	
	public RequestToHr() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "RequestToHr [jobId=" + jobId + ", jobRole=" + jobRole + ", experience=" + experience + ", location="
				+ location + "]";
	}
	
	
	
}
