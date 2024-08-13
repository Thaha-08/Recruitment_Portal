package com.mindgate.RecruitmentPortal.Service;

import com.mindgate.RecruitmentPortal.Exceptions.ProfileNotFoundException;
import com.mindgate.RecruitmentPortal.beans.AssignedProject;

public interface AssignedProjectService {
	
	public AssignedProject assign(int jobId,int empId) throws ProfileNotFoundException;

}
