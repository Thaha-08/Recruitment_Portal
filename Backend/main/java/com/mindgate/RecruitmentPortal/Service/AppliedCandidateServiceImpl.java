package com.mindgate.RecruitmentPortal.Service;

import java.awt.color.ProfileDataException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindgate.RecruitmentPortal.Repository.AppliedCandidateRepository;
import com.mindgate.RecruitmentPortal.Repository.ProjectLoginDetailsRepository;
import com.mindgate.RecruitmentPortal.Repository.WorkbenchRepository;
import com.mindgate.RecruitmentPortal.beans.AppliedCandidates;
import com.mindgate.RecruitmentPortal.beans.ProjectLoginDetails;
import com.mindgate.RecruitmentPortal.beans.Workbench;

@Service
public class AppliedCandidateServiceImpl implements AppliedCandidateService {

	@Autowired
	private AppliedCandidateRepository appliedCandidateRepository;

	@Autowired
	private ProjectLoginDetailsRepository projectLoginDetailsRepository;
	
	@Autowired
	private WorkbenchRepository workbenchRepository;
	
	@Autowired
	private EmailServiceImpl emailServiceImpl;
	
	

	@Override
	public AppliedCandidates register(AppliedCandidates appliedCandidates) {

		return appliedCandidateRepository.save(appliedCandidates);
	}

	@Override
	public List<AppliedCandidates> appliedCandidateList() {

		return appliedCandidateRepository.findAll();
	}

	@Override
	public List<AppliedCandidates> selectedcandidateList() {
		
		return appliedCandidateRepository.selectedList();
	}

	@Override
	public void acceptHR(int candId) {
		Optional<AppliedCandidates> op =appliedCandidateRepository.findById(candId);
		Workbench wb =new Workbench(op.get().getCandidateName(),op.get().getCandidateSkills(),op.get().getCandidateExperience());
		workbenchRepository.save(wb);
		
		
		//mail
		String message="Congratulation.. You are Selected from the Mindagte Solutions  \n Meeting Link : https://meet.google.com/fci-ugjb-ssx\"";
		emailServiceImpl.sendEmail(op.get().getCandidateEmailId(), "Selected!!", message);
		
		appliedCandidateRepository.deleteById(candId);
	}

	@Override
	public void rejectHR(int candId) {
		
		Optional<AppliedCandidates> op =appliedCandidateRepository.findById(candId);	
		
		//mail
				String message="Congratulation.. You are Rejected from the Mindagte Solutions";
				emailServiceImpl.sendEmail(op.get().getCandidateEmailId(), "Sorry!!", message);
				
				appliedCandidateRepository.deleteById(candId);
	
	}

	@Override
	public void nextlvlHRmail(int candId) {
		Optional<AppliedCandidates> op =appliedCandidateRepository.findById(candId);	

		//mail
		String message="Congratulation.. You are selected for HR Round...Be prepared  \n Meeting Link : https://meet.google.com/fci-ugjb-ssx\"";
		emailServiceImpl.sendEmail(op.get().getCandidateEmailId(), "Next-Round!!", message);
				
	}

	@Override
	public void HRassignIR(int candidateId, String interviewerId, String interviewerTime) {
		
		Optional<ProjectLoginDetails> interviewerDetails=projectLoginDetailsRepository.findById(interviewerId);
		if(interviewerDetails.isPresent())
		{
			Optional<AppliedCandidates> candidateDetails=appliedCandidateRepository.findById(candidateId);
			AppliedCandidates candidate=candidateDetails.get();
			 candidate.setInterviewerId(interviewerId);
			 candidate.setInterview("Forwarded");
			appliedCandidateRepository.save(candidate);
			
			//MAIL
			String interviewerMSG= "Dear "+ interviewerId+" You are Assigned for taking interview Process";
			
			String candidateMSG= "Dear"+candidate.getCandidateName() +"You are Shortlist for Interview Process. It will held on " + interviewerTime+ " so be Prepared \n Meeting Link : https://meet.google.com/fci-ugjb-ssx";
			
			emailServiceImpl.sendEmail(candidate.getCandidateEmailId(),"Interview Process!!", candidateMSG);
			
			emailServiceImpl.sendEmail(interviewerDetails.get().getEmail(), "Interview Assigned!!", interviewerMSG);
		}
		
	}

	@Override
	public void IRresponse(int candidateId, String select, String remarks) {
		Optional<AppliedCandidates> candidateDetails=appliedCandidateRepository.findById(candidateId);
		if(candidateDetails.isPresent()) {
			
		AppliedCandidates candidate=candidateDetails.get();
		candidate.setCandidateId(candidateId);
		candidate.setSelected(select);
		candidate.setRemarks(remarks);
		candidate.setInterview("completed");
		candidate.setInterviewerId("-");
		appliedCandidateRepository.save(candidate);
		
		
		}
		else {
			throw new ProfileDataException("not data found");
		}
	}

	//IR history
	
	
	
	
	//IR module (abt interview details )in first page
	@Override
	public List<AppliedCandidates> interviewList(String username) {
		
		return appliedCandidateRepository.interviewDetailList(username);
	}


	

}
