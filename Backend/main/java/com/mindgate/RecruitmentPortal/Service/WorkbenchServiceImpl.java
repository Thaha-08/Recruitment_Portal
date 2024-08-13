package com.mindgate.RecruitmentPortal.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindgate.RecruitmentPortal.Exceptions.ProfileNotFoundException;
import com.mindgate.RecruitmentPortal.Repository.WorkbenchRepository;
import com.mindgate.RecruitmentPortal.beans.Workbench;

@Service
public class WorkbenchServiceImpl implements WorkbenchService {

	@Autowired
	private WorkbenchRepository workbenchRepository;
	
	
	@Override
	public List<Workbench> viewResource() {
		return workbenchRepository.findAll();
	}


	@Override
	public Workbench storeResource(Workbench workbench) {
		
		return workbenchRepository.save(workbench);
	}


	@Override
	public void deleteRes(int empId) throws ProfileNotFoundException {
		Optional<Workbench> op=workbenchRepository.findById( empId);
		if(op.isPresent())
		{
			workbenchRepository.deleteById( empId);
		}else {
			throw new ProfileNotFoundException( empId+"Not found");
			}
		
		
	}


	
	

}
