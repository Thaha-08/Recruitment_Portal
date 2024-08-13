package com.mindgate.RecruitmentPortal.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mindgate.RecruitmentPortal.beans.ProjectLoginDetails;

public interface ProjectLoginDetailsRepository extends JpaRepository<ProjectLoginDetails, String> {

	@Query(value=" SELECT * FROM AdminTable a WHERE a.type='Interviewer'" ,nativeQuery = true)
	List<ProjectLoginDetails> interviewerList();
	
	
	
	
	
}
