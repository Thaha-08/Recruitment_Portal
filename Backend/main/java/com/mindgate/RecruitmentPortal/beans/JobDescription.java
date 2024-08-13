package com.mindgate.RecruitmentPortal.beans;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="JobDescription")
public class JobDescription {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int jobId;
	
	@Column(name="jobRole")
	private String  jobRole;
	
	@Column(name="jobStatus")
	private String  jobStatus="Pending";
	
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

	public String getJobStatus() {
		return jobStatus;
	}

	public void setJobStatus(String jobStatus) {
		this.jobStatus = jobStatus;
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

	public JobDescription(int jobId, String jobRole, String jobStatus, int experience, String location) {
		super();
		this.jobId = jobId;
		this.jobRole = jobRole;
		this.jobStatus = jobStatus;
		this.experience = experience;
		this.location = location;
	}
	
	public JobDescription() {
		// Default constructor...
	}

	@Override
	public String toString() {
		return "JobDescription [jobId=" + jobId + ", jobRole=" + jobRole + ", jobStatus=" + jobStatus + ", experience="
				+ experience + ", location=" + location + "]";
	}
	
	
	
	

}
