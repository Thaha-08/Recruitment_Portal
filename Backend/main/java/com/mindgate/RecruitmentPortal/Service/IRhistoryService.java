package com.mindgate.RecruitmentPortal.Service;

import java.util.List;

import com.mindgate.RecruitmentPortal.beans.IRhistory;

public interface IRhistoryService {
	
	List<IRhistory> specificIR(String username);
	
	List<IRhistory> selectedHistory();
	
	void registerIRhistory(int candidateId);
	
	void registerHistory(int candidateId, String username);
	
	void deleteHistory(int candidateId);
	
	
	
	

}
