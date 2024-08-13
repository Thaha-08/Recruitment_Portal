package com.mindgate.RecruitmentPortal.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mindgate.RecruitmentPortal.beans.AppliedCandidates;
import com.mindgate.RecruitmentPortal.beans.IRhistory;

public interface IRhistoryRepository extends JpaRepository<IRhistory, Integer>{
	

	@Query(value="SELECT * FROM IRHISTORY WHERE  interviewerName=?1 " ,nativeQuery = true)
	List<IRhistory> specificIR(String username);
	
	@Query(value="SELECT * FROM  AppliedCandidates WHERE  interviewerId=?1",nativeQuery = true)
	List<AppliedCandidates> interviewList(String username);
	

	
}
