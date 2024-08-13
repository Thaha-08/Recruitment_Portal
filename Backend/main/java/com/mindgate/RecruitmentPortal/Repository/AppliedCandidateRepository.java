package com.mindgate.RecruitmentPortal.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mindgate.RecruitmentPortal.beans.AppliedCandidates;
import com.mindgate.RecruitmentPortal.beans.ProjectLoginDetails;

public interface AppliedCandidateRepository  extends JpaRepository<AppliedCandidates, Integer>{
	

	@Query(value=" select * from AppliedCandidates ap where ap.selected='Selected'" ,nativeQuery = true)
	List<AppliedCandidates> selectedList();
	
	//this for interview module(interview list page)
	@Query(value="SELECT * FROM AppliedCandidates where interviewerId=?1",nativeQuery = true)
	List<AppliedCandidates> interviewDetailList(String username);
	
	@Query(value="SELECT * FROM AppliedCandidates WHERE  selected='selected';",nativeQuery = true)
	List<AppliedCandidates> selectedHistory();
}
