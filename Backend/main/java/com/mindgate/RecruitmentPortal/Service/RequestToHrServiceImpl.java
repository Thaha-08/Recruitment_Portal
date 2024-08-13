package com.mindgate.RecruitmentPortal.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindgate.RecruitmentPortal.Exceptions.ProfileNotFoundException;
import com.mindgate.RecruitmentPortal.Repository.JobDescriptionRepository;
import com.mindgate.RecruitmentPortal.Repository.RequestToHrRepository;
import com.mindgate.RecruitmentPortal.beans.JobDescription;
import com.mindgate.RecruitmentPortal.beans.RequestToHr;

@Service
public class RequestToHrServiceImpl implements RequestToHrService{
	
	@Autowired
	private JobDescriptionRepository jobDescriptionRepository;
	@Autowired
	private RequestToHrRepository requestToHrRepository;
	 
	@Override
	public RequestToHr store(int jobId) throws ProfileNotFoundException {
		
		Optional <JobDescription> op=jobDescriptionRepository.findById(jobId);
		if(op.isPresent())
		{	
			JobDescription jb =op.get();
			jb.setJobStatus("Forwarded To Hr");
			jobDescriptionRepository.save(jb);
			RequestToHr req=new RequestToHr( jobId,op.get().getJobRole(),op.get().getExperience(),op.get().getLocation());//parameterized constructor
			return requestToHrRepository.save(req);
		}
		else
			{
			throw new ProfileNotFoundException("Not Found..");
			}
		
	}
	
	
	
	
	@Override
	public List<RequestToHr> viewRequests() throws ProfileNotFoundException {
		 
		return requestToHrRepository.findAll();
	}
	
}
