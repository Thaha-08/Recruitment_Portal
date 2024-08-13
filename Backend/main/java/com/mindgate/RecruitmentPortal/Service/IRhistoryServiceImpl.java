package com.mindgate.RecruitmentPortal.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindgate.RecruitmentPortal.Repository.AppliedCandidateRepository;
import com.mindgate.RecruitmentPortal.Repository.IRhistoryRepository;
import com.mindgate.RecruitmentPortal.beans.AppliedCandidates;
import com.mindgate.RecruitmentPortal.beans.IRhistory;

@Service
public class IRhistoryServiceImpl implements IRhistoryService {

	@Autowired
	private IRhistoryRepository iRhistoryRepository;

	@Autowired
	private AppliedCandidateRepository appliedCandidateRepository;

	@Override
	public List<IRhistory> specificIR(String username) {

		return iRhistoryRepository.specificIR(username);
	}

	@Override
	public List<IRhistory> selectedHistory() {

		return iRhistoryRepository.findAll();

	}

	@Override
	public void registerIRhistory(int candidateId) {
		Optional<AppliedCandidates> selectedList = appliedCandidateRepository.findById(candidateId);

		if (selectedList.isPresent()) {
			IRhistory irhis = new IRhistory(candidateId, selectedList.get().getInterviewerId(),
					selectedList.get().getCandidateName(), selectedList.get().getCandidateSkills(),
					selectedList.get().getRemarks(), selectedList.get().getSelected());
			iRhistoryRepository.save(irhis);
		}

	}

	//with interviewer name
	@Override
	public void registerHistory(int candidateId, String username) {
		Optional<AppliedCandidates> selectedList = appliedCandidateRepository.findById(candidateId);

		if (selectedList.isPresent()) {
			IRhistory irhis = new IRhistory(candidateId,username,
					selectedList.get().getCandidateName(), selectedList.get().getCandidateSkills(),
					selectedList.get().getRemarks(), selectedList.get().getSelected());
			iRhistoryRepository.save(irhis);
		}	}

	@Override
	public void deleteHistory(int candidateId) {
		iRhistoryRepository.deleteById(candidateId);
		
	}

}
