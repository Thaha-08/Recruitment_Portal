package com.mindgate.RecruitmentPortal.Service;

import java.util.List;

import com.mindgate.RecruitmentPortal.beans.AppliedCandidates;
import com.mindgate.RecruitmentPortal.beans.ProjectLoginDetails;

public interface AppliedCandidateService {
	public AppliedCandidates register(AppliedCandidates appliedCandidates);
	
	List<AppliedCandidates> appliedCandidateList();
	
	List<AppliedCandidates> selectedcandidateList();
	
	void acceptHR(int candId);
	void rejectHR(int candId);
	void nextlvlHRmail(int candId);
	
	void HRassignIR (int candidateId, String interviewerId,String interviewerTime);
	
	void IRresponse (int candidateId, String select,String remarks);
	
	List<AppliedCandidates> interviewList(String username);
	
		
	

}
