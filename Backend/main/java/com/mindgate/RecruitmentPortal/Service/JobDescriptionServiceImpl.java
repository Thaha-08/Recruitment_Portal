package com.mindgate.RecruitmentPortal.Service;

import java.awt.color.ProfileDataException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindgate.RecruitmentPortal.Exceptions.ProfileNotFoundException;
import com.mindgate.RecruitmentPortal.Repository.JobDescriptionRepository;
import com.mindgate.RecruitmentPortal.beans.JobDescription;
import com.mindgate.RecruitmentPortal.beans.ProjectLoginDetails;
import com.mindgate.RecruitmentPortal.beans.Workbench;

@Service
public class JobDescriptionServiceImpl implements JobDescriptionService {

	@Autowired
	private JobDescriptionRepository jobDescriptionRepository;

	@Override // STORE
	public JobDescription storejobDesc(JobDescription jobdescription) {
		return jobDescriptionRepository.save(jobdescription);
	}

	@Override // VIEW
	public List<JobDescription> viewjobDesc() {
		return jobDescriptionRepository.findAll();
	}

	@Override //EDIT
	public JobDescription editjobDesc(JobDescription jobDescription) {
		Optional<JobDescription> op = jobDescriptionRepository.findById(jobDescription.getJobId()); // it is frontend id  found that in DB  (store in op)     
		System.out.println(op);
		if (op.isPresent()) {
		
			return jobDescriptionRepository.save(jobDescription);
		} else {
			throw new ProfileDataException("Job Description not Found");
		}

	}

	@Override //DELETE
	public void deletejobDesc(int jobId) throws ProfileNotFoundException {
		Optional<JobDescription> op = jobDescriptionRepository.findById(jobId);
		if (op.isPresent()) {
			
			jobDescriptionRepository.deleteById(jobId);
		} else {
			throw new ProfileNotFoundException(jobId + "Not found");
		}

	}
	
	

}
