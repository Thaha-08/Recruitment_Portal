package com.mindgate.RecruitmentPortal.beans;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="IRhistory")
public class IRhistory {
	
	@Id
	private int candidateId;
	
	private String interviewerName;
	
	private String candidateName;
	
	private String candidateSkills;
	
	private String remarks;
	
	private String  selected;

	public int getCandidateId() {
		return candidateId;
	}

	public void setCandidateId(int candidateId) {
		this.candidateId = candidateId;
	}

	public String getInterviewerName() {
		return interviewerName;
	}

	public void setInterviewerName(String interviewerName) {
		this.interviewerName = interviewerName;
	}

	public String getCandidateName() {
		return candidateName;
	}

	public void setCandidateName(String candidateName) {
		this.candidateName = candidateName;
	}

	public String getCandidateSkills() {
		return candidateSkills;
	}

	public void setCandidateSkills(String candidateSkills) {
		this.candidateSkills = candidateSkills;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public String getSelected() {
		return selected;
	}

	public void setSelected(String selected) {
		this.selected = selected;
	}
	
	public IRhistory() {
		// TODO Auto-generated constructor stub
	}

	public IRhistory(int candidateId, String interviewerName, String candidateName, String candidateSkills,
			String remarks, String selected) {
		super();
		this.candidateId = candidateId;
		this.interviewerName = interviewerName;
		this.candidateName = candidateName;
		this.candidateSkills = candidateSkills;
		this.remarks = remarks;
		this.selected = selected;
	}
	
	
}
