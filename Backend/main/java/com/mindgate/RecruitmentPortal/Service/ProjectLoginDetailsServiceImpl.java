package com.mindgate.RecruitmentPortal.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindgate.RecruitmentPortal.Exceptions.ProfileNotFoundException;
import com.mindgate.RecruitmentPortal.Repository.ProjectLoginDetailsRepository;
import com.mindgate.RecruitmentPortal.beans.ProjectLoginDetails;

@Service
public class ProjectLoginDetailsServiceImpl implements ProjectLoginDetailsService{
	
	@Autowired
	private ProjectLoginDetailsRepository projectLoginDetailsRepository ;
	
	@Autowired
	private EmailService emailService;
	
	
				//register
	@Override
	public ProjectLoginDetails register(ProjectLoginDetails projectLoginDetails) throws ProfileNotFoundException {
		Optional<ProjectLoginDetails> op=projectLoginDetailsRepository.findById(projectLoginDetails.getUsername());
		if(op.isPresent())
		{
			throw new ProfileNotFoundException("Already present");
		}
		else {
			 projectLoginDetailsRepository.save(projectLoginDetails);
			 
				//MAIL
				String message ="Hello "+projectLoginDetails.getType() + " \n \n your Login Credentials are :- \n username:  "+ projectLoginDetails.getUsername()+ " \n Password:- " + projectLoginDetails.getPassword();
				emailService.sendEmail(projectLoginDetails.getEmail(), "Login Credentials..!'", message);
				return projectLoginDetails;
			
		}
		
		
		
	}

	
                 
							//LOGIN
	@Override
	public ProjectLoginDetails login(ProjectLoginDetails projectLoginDetails) throws ProfileNotFoundException {
		Optional<ProjectLoginDetails> optional=projectLoginDetailsRepository.findById(projectLoginDetails.getUsername());
		if(optional.isPresent())
		{
			ProjectLoginDetails p=optional.get();//  from db
			if(p.getPassword().equals(projectLoginDetails.getPassword()) &&(p.getType().equals(projectLoginDetails.getType())))  
					{
						return p;
					}
			else throw new ProfileNotFoundException("Password is Wrong");
		}
		else throw new ProfileNotFoundException(projectLoginDetails.getUsername()+"is Wrong");
		
	}
	  	
	@Override
	public ProjectLoginDetails fetchProfile(String username) throws ProfileNotFoundException {
	Optional<ProjectLoginDetails> op=projectLoginDetailsRepository.findById(username);
	
	return op.orElseThrow(
			() -> new ProfileNotFoundException(username+"is not found"));
			
	}
	
	@Override
	public List<ProjectLoginDetails> interviewerList() {

		return projectLoginDetailsRepository.interviewerList();
	}
		
	
}
