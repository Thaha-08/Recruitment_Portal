package com.mindgate.RecruitmentPortal.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindgate.RecruitmentPortal.Exceptions.ProfileNotFoundException;
import com.mindgate.RecruitmentPortal.Repository.AssignedCandidatesRepository;
import com.mindgate.RecruitmentPortal.Repository.AssignedProjectRepository;
import com.mindgate.RecruitmentPortal.Repository.JobDescriptionRepository;
import com.mindgate.RecruitmentPortal.Repository.WorkbenchRepository;
import com.mindgate.RecruitmentPortal.beans.AssignedProject;
import com.mindgate.RecruitmentPortal.beans.JobDescription;
import com.mindgate.RecruitmentPortal.beans.Workbench;

@Service
public class AssignedProjectServiceImpl  implements AssignedProjectService{
	
	@Autowired
	private AssignedCandidatesRepository assignedCandidatesRepository;
	
	@Autowired
	private JobDescriptionRepository jobDescriptionRepository;
	
	@Autowired private WorkbenchRepository workbenchRepository;
	
	@Autowired
	private AssignedProjectRepository assignedProjectRepository;

	@Override
	public AssignedProject assign(int jobId, int empId) throws ProfileNotFoundException{
		
		Optional<JobDescription> jobdesc=jobDescriptionRepository.findById(jobId);
		Optional<Workbench> wrkbnch=workbenchRepository.findById(empId);
		
		if(jobdesc.isPresent() && wrkbnch.isPresent())
		{
			workbenchRepository.deleteById(empId);
			
			JobDescription jb=jobdesc.get();
			jb.setJobStatus("Completed");
			jobDescriptionRepository.save(jb);
			
			AssignedProject assignedProject= new AssignedProject(jobId,jobdesc.get().getJobRole(),empId,wrkbnch.get().getEmpname());;
			return assignedProjectRepository.save(assignedProject);
		}
		else
		{
		   throw new ProfileNotFoundException("Not Found..");
		}
		
	}
	
	
	
	
	
	
	}
	

	
	

