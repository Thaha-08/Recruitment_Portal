package com.mindgate.RecruitmentPortal.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindgate.RecruitmentPortal.Exceptions.ProfileNotFoundException;
import com.mindgate.RecruitmentPortal.Repository.WorkbenchRepository;
import com.mindgate.RecruitmentPortal.beans.Workbench;

public interface WorkbenchService {

	List<Workbench> viewResource();

	Workbench storeResource(Workbench workbench);

	void deleteRes(int jobId) throws ProfileNotFoundException;

}
