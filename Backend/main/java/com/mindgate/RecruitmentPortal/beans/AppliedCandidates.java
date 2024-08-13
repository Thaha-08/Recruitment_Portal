package com.mindgate.RecruitmentPortal.beans;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "AppliedCandidates")
public class AppliedCandidates {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "candidateId")
	private int candidateId;

	private String candidateName;

	private String candidateAge;

	private String candidateGender;

	private String candidateDegree;

	private String candidateSkills;

	private int candidateExpectedCTC;

	private int candidateExperience;

	private String candidateAddress;

	private String selected = "-";

	private String interview = "no";

	private String interviewerEmailId;

	private String remarks;

	private String candidateEmailId;

	private String interviewerId;

	public String getInterviewerId() {
		return interviewerId;
	}

	public void setInterviewerId(String interviewerId) {
		this.interviewerId = interviewerId;
	}

	public int getCandidateId() {
		return candidateId;
	}

	public void setCandidateId(int candidateId) {
		this.candidateId = candidateId;
	}

	public String getCandidateName() {
		return candidateName;
	}

	public void setCandidateName(String candidateName) {
		this.candidateName = candidateName;
	}

	public String getCandidateAge() {
		return candidateAge;
	}

	public void setCandidateAge(String candidateAge) {
		this.candidateAge = candidateAge;
	}

	public String getCandidateGender() {
		return candidateGender;
	}

	public void setCandidateGender(String candidateGender) {
		this.candidateGender = candidateGender;
	}

	public String getCandidateDegree() {
		return candidateDegree;
	}

	public void setCandidateDegree(String candidateDegree) {
		this.candidateDegree = candidateDegree;
	}

	public String getCandidateSkills() {
		return candidateSkills;
	}

	public void setCandidateSkills(String candidateSkills) {
		this.candidateSkills = candidateSkills;
	}

	public int getCandidateExpectedCTC() {
		return candidateExpectedCTC;
	}

	public void setCandidateExpectedCTC(int candidateExpectedCTC) {
		this.candidateExpectedCTC = candidateExpectedCTC;
	}

	public int getCandidateExperience() {
		return candidateExperience;
	}

	public void setCandidateExperience(int candidateExperience) {
		this.candidateExperience = candidateExperience;
	}

	public String getCandidateAddress() {
		return candidateAddress;
	}

	public void setCandidateAddress(String candidateAddress) {
		this.candidateAddress = candidateAddress;
	}

	public String getSelected() {
		return selected;
	}

	public void setSelected(String selected) {
		this.selected = selected;
	}

	public String getInterview() {
		return interview;
	}

	public void setInterview(String interview) {
		this.interview = interview;
	}

	public String getInterviewerEmailId() {
		return interviewerEmailId;
	}

	public void setInterviewerEmailId(String interviewerEmailId) {
		this.interviewerEmailId = interviewerEmailId;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public String getCandidateEmailId() {
		return candidateEmailId;
	}

	public void setCandidateEmailId(String candidateEmailId) {
		this.candidateEmailId = candidateEmailId;
	}

	public AppliedCandidates() {

	}

	public AppliedCandidates(int candidateId, String candidateName, String candidateAge, String candidateGender,
			String candidateDegree, String candidateSkills, int candidateExpectedCTC, int candidateExperience,
			String candidateAddress, String selected, String interview, String interviewerEmailId, String remarks,
			String candidateEmailId, String interviewerId) {
		super();
		this.candidateId = candidateId;
		this.candidateName = candidateName;
		this.candidateAge = candidateAge;
		this.candidateGender = candidateGender;
		this.candidateDegree = candidateDegree;
		this.candidateSkills = candidateSkills;
		this.candidateExpectedCTC = candidateExpectedCTC;
		this.candidateExperience = candidateExperience;
		this.candidateAddress = candidateAddress;
		this.selected = selected;
		this.interview = interview;
		this.interviewerEmailId = interviewerEmailId;
		this.remarks = remarks;
		this.candidateEmailId = candidateEmailId;
		this.interviewerId = interviewerId;
	}

	@Override
	public String toString() {
		return "AppliedCandidates [candidateId=" + candidateId + ", candidateName=" + candidateName + ", candidateAge="
				+ candidateAge + ", candidateGender=" + candidateGender + ", candidateDegree=" + candidateDegree
				+ ", candidateSkills=" + candidateSkills + ", candidateExpectedCTC=" + candidateExpectedCTC
				+ ", candidateExperience=" + candidateExperience + ", candidateAddress=" + candidateAddress
				+ ", selected=" + selected + ", interview=" + interview + ", interviewerEmailId=" + interviewerEmailId
				+ ", remarks=" + remarks + ", candidateEmailId=" + candidateEmailId + "]";
	}

	public AppliedCandidates(int candidateId, String selected, String remarks) {
		super();
		this.candidateId = candidateId;
		this.selected = selected;
		this.remarks = remarks;

	}

	
	
}
