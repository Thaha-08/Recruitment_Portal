package com.mindgate.RecruitmentPortal.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindgate.RecruitmentPortal.Exceptions.ProfileNotFoundException;
import com.mindgate.RecruitmentPortal.Repository.AssignedCandidatesRepository;
import com.mindgate.RecruitmentPortal.Repository.AssignedProjectRepository;
import com.mindgate.RecruitmentPortal.Repository.JobDescriptionRepository;
import com.mindgate.RecruitmentPortal.Repository.WorkbenchRepository;
import com.mindgate.RecruitmentPortal.beans.AssignedCandidate;
import com.mindgate.RecruitmentPortal.beans.AssignedProject;
import com.mindgate.RecruitmentPortal.beans.JobDescription;
import com.mindgate.RecruitmentPortal.beans.Workbench;

@Service
public class AssignedCandidatesServiceImpl implements AssignedCandidatesService {
	@Autowired
	private AssignedCandidatesRepository assignedCandidatesRepository;

	@Autowired
	private JobDescriptionRepository jobDescriptionRepository;

	@Autowired
	private WorkbenchRepository workbenchRepository;

	@Autowired
	private AssignedProjectRepository assignedProjectRepository;

	@Override
	public List<AssignedCandidate> viewAssignCandidate() {

		return assignedCandidatesRepository.findAll();
	}

	@Override
	public AssignedCandidate assign(int empId, int jobId) throws ProfileNotFoundException {

		Optional<Workbench> op = workbenchRepository.findById(empId);

		Optional<JobDescription> assignJob = jobDescriptionRepository.findById(jobId);

		if (op.isPresent() && assignJob.isPresent()) {
			AssignedCandidate assigncandi = new AssignedCandidate(empId, jobId, op.get().getEmpname(),
					assignJob.get().getJobRole());
			assignedCandidatesRepository.save(assigncandi);
			workbenchRepository.deleteById(empId);
			return assigncandi;
		} else {
			throw new ProfileNotFoundException("Failed");
		}

	}

}
