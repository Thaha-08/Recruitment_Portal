package com.mindgate.RecruitmentPortal.Service;



import java.util.List;

import com.mindgate.RecruitmentPortal.Exceptions.ProfileNotFoundException;
import com.mindgate.RecruitmentPortal.beans.ProjectLoginDetails;

public interface ProjectLoginDetailsService {

	ProjectLoginDetails register(ProjectLoginDetails projectLoginDetails) throws ProfileNotFoundException;
	
	ProjectLoginDetails login(ProjectLoginDetails projectLoginDetails)throws ProfileNotFoundException;
	ProjectLoginDetails fetchProfile(String username) throws ProfileNotFoundException;
	
	List<ProjectLoginDetails> interviewerList();
}
