package com.mindgate.RecruitmentPortal.Service;

import java.util.List;

import com.mindgate.RecruitmentPortal.Exceptions.ProfileNotFoundException;
import com.mindgate.RecruitmentPortal.beans.AssignedCandidate;

public interface AssignedCandidatesService {

	List<AssignedCandidate> viewAssignCandidate();
	
	AssignedCandidate assign(int empId,int jobId) throws ProfileNotFoundException; 
}
