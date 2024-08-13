package com.mindgate.RecruitmentPortal.Service;

import java.util.List;

import com.mindgate.RecruitmentPortal.Exceptions.ProfileNotFoundException;
import com.mindgate.RecruitmentPortal.beans.JobDescription;


public interface JobDescriptionService {

	JobDescription  storejobDesc(JobDescription jobdescription); //STORE(role,loc,exp)
	
	List<JobDescription> viewjobDesc(); //VIEW TABLE
	
	JobDescription editjobDesc(JobDescription jobDescription); //EDIT OR UPDATE
	
	void deletejobDesc(int jobId) throws ProfileNotFoundException;
	
}
