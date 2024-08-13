package com.mindgate.RecruitmentPortal.Service;

import java.util.List;

import com.mindgate.RecruitmentPortal.Exceptions.ProfileNotFoundException;
import com.mindgate.RecruitmentPortal.beans.RequestToHr;

public interface RequestToHrService {

	RequestToHr store(int jobId) throws ProfileNotFoundException;
	
	List<RequestToHr> viewRequests() throws ProfileNotFoundException;
}
