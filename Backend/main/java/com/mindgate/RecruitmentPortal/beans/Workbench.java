package com.mindgate.RecruitmentPortal.beans;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="WorkBench")
public class Workbench {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int empId;
	
	@Column(name="empname")
	private String  empname;
	
	private String skills;
	
	private int experience;
	
	
	public Workbench() {
		// TODO Auto-generated constructor stub
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

	public String getSkills() {
		return skills;
	}

	public void setSkills(String skills) {
		this.skills = skills;
	}

	public int getExperience() {
		return experience;
	}

	public void setExperience(int experience) {
		this.experience = experience;
	}

	@Override
	public String toString() {
		return "Workbench [empId=" + empId + ", empname=" + empname + ", skills=" + skills + ", experience="
				+ experience + "]";
	}

	public Workbench(int empId, String empname, String skills, int experience) {
		super();
		this.empId=empId;
		this.empname = empname;
		this.skills = skills;
		this.experience = experience;
	}

	public Workbench(String empname, String skills, int experience) {
		super();
		this.empname = empname;
		this.skills = skills;
		this.experience = experience;
	}
	

	
	

}
