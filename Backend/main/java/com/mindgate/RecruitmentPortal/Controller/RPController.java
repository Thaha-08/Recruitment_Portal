package com.mindgate.RecruitmentPortal.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mindgate.RecruitmentPortal.Exceptions.ProfileNotFoundException;
import com.mindgate.RecruitmentPortal.Service.AppliedCandidateService;
import com.mindgate.RecruitmentPortal.Service.AssignedCandidatesService;
import com.mindgate.RecruitmentPortal.Service.AssignedProjectService;
import com.mindgate.RecruitmentPortal.Service.IRhistoryService;
import com.mindgate.RecruitmentPortal.Service.JobDescriptionService;
import com.mindgate.RecruitmentPortal.Service.ProjectLoginDetailsService;
import com.mindgate.RecruitmentPortal.Service.RequestToHrService;
import com.mindgate.RecruitmentPortal.Service.WorkbenchService;
import com.mindgate.RecruitmentPortal.beans.AppliedCandidates;
import com.mindgate.RecruitmentPortal.beans.AssignedCandidate;
import com.mindgate.RecruitmentPortal.beans.AssignedProject;
import com.mindgate.RecruitmentPortal.beans.IRhistory;
import com.mindgate.RecruitmentPortal.beans.JobDescription;
import com.mindgate.RecruitmentPortal.beans.ProjectLoginDetails;
import com.mindgate.RecruitmentPortal.beans.RequestToHr;
import com.mindgate.RecruitmentPortal.beans.Workbench;

import oracle.jdbc.proxy.annotation.Post;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/index")
public class RPController {
	@Autowired
	private WorkbenchService workbenchService;

	@Autowired
	private ProjectLoginDetailsService projectLoginDetailsService;

	@Autowired
	private JobDescriptionService jobDescriptionService;

	@Autowired
	private RequestToHrService requestToHrService;

	@Autowired
	private AssignedCandidatesService assignedCandidatesService;

	@Autowired
	private AssignedProjectService assignedProjectService;

	@Autowired
	private AppliedCandidateService appliedCandidateService;

	@Autowired
	private IRhistoryService iRhistoryService;

	// REGISTER BY ADMIN

	@PostMapping(path = "/admin/register", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> register(@RequestBody ProjectLoginDetails projectLoginDetails)
			throws ProfileNotFoundException {
		try {

			ProjectLoginDetails p = projectLoginDetailsService.register(projectLoginDetails);
			String msg = "success";
			return ResponseEntity.status(201).body(msg);

		} catch (ProfileNotFoundException e) {
			return ResponseEntity.status(201).body(e.getMessage());
		}

	}

	// LOGIN
	@PostMapping(value = { "/adminLogin", "/TLlogin", "/PMlogin", "/HRlogin",
			"/IRlogin" }, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> login(@RequestBody ProjectLoginDetails projectLoginDetails)
			throws ProfileNotFoundException {
		try {
			ProjectLoginDetails p = projectLoginDetailsService.login(projectLoginDetails);
			String msg = "success";
			return ResponseEntity.status(201).body(msg);
		} catch (Exception e) {
			return ResponseEntity.status(201).body("failed");
		}

	}

	// STORE (job desc table)
	@PostMapping(path = "/TLstorejobDescription", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> storejobDesc(@RequestBody JobDescription jobdescription) {
		JobDescription jp = jobDescriptionService.storejobDesc(jobdescription);
		String msg = "Successfully Stored";
		return ResponseEntity.status(201).body(msg);
	}

	// VIEW
	@GetMapping(value = { "/TLviewjobDescription", "/PMviewjobDescription" })
	public ResponseEntity<Object> viewjobDesc() {
		List<JobDescription> JDlist = jobDescriptionService.viewjobDesc();
		return ResponseEntity.status(200).body(JDlist);
	}

	// EDIT
	@PostMapping(path = "/TLeditjobDescription", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> editjobDesc(@RequestBody JobDescription jobDescription)
			throws ProfileNotFoundException {

		try {
			JobDescription jd = jobDescriptionService.editjobDesc(jobDescription);
			String msg = "updated Successfully";
			return ResponseEntity.status(201).body(msg);

		} catch (Exception e) {
			return ResponseEntity.status(201).body(e.getMessage());
		}

	}

	// DELETE - JOB DESC
	@DeleteMapping(value = { "/TLdeletejobDesc/{id}", "/PMdeletejobDesc/{id}" })
	public ResponseEntity<Object> deletejobDesc(@PathVariable("id") int id) throws ProfileNotFoundException {
		try {
			jobDescriptionService.deletejobDesc(id);
			String msg = "success";
			return ResponseEntity.status(201).body(msg);

		} catch (ProfileNotFoundException e) {
			return ResponseEntity.status(201).body(e.getMessage());
		}

	}

	// PM-VIEW (wrkbench table)
	@GetMapping(value = { "/PMviewResource", "/HRviewResource" })
	public ResponseEntity<Object> viewResourse() {
		List<Workbench> wbList = workbenchService.viewResource();

		return ResponseEntity.status(201).body(wbList);
	}

	// PM-VIEW (reqToHR table)
	@GetMapping(value = { "/PMviewRequests", "/HRviewRequests" })
	public ResponseEntity<Object> viewRequest() {
		try {
			List<RequestToHr> reqList = requestToHrService.viewRequests();
			return ResponseEntity.status(201).body(reqList);

		} catch (Exception e) {
			return ResponseEntity.status(201).body("error");
		}

	}

	// PM,HR -STORE (wrkbench table)
	@PostMapping(value = { "/PMstoreResource", "/HRstoreResource" }, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> storeResource(@RequestBody Workbench workbench) {
		Workbench wb = workbenchService.storeResource(workbench);
		String msg = "successfully stored";
		return ResponseEntity.status(201).body(msg);
	}

	// DELETE- PM,HR (wrkbench table)
	@DeleteMapping(value = { "/PMdeleteResource/{empId}", "/HRdeleteResource/{empId}" })
	ResponseEntity<Object> deleteResource(@PathVariable("empid") int empId) {
		try {
			workbenchService.deleteRes(empId);
			String msg = "Deleted";
			return ResponseEntity.status(201).body(msg);

		} catch (Exception e) {
			return ResponseEntity.status(201).body(e.getMessage() + "Not Found");
		}

	}

	// PM REQUEST TO HR
	@PostMapping(value = "/RequestToHr/{jobId}")
	public ResponseEntity<Object> forwardToHR(@PathVariable("jobId") int jobId) {
		try {
			RequestToHr req = requestToHrService.store(jobId);
			return ResponseEntity.status(201).body(req);

		} catch (Exception e) {
			return ResponseEntity.status(201).body(e.getMessage());
		}

	}

	// ASSIGNED CANDIDATES
	@GetMapping(value = "/viewAssignedCandidates")
	public ResponseEntity<Object> viewAssignedCandidate() {
		List<AssignedCandidate> assCndList = assignedCandidatesService.viewAssignCandidate();
		return ResponseEntity.status(201).body(assCndList);
	}

	// PM wrkbench Assign (pm workbench assign candi to TL request)

	@PostMapping(value = { "/PM-wrkbenchAssign/{empId}/{jobId}", "/HRassign" })
	public ResponseEntity<Object> assignCandidate(@PathVariable("empId") int empId, @PathVariable("jobId") int jobId)
			throws ProfileNotFoundException {
		try {

			AssignedCandidate asig = assignedCandidatesService.assign(empId, jobId);
			String msg = "success";
			return ResponseEntity.status(201).body(msg);

		} catch (ProfileNotFoundException e) {
			return ResponseEntity.status(201).body("Failed");
		}

	}

	// NEW CANDIDATE REGISTER BY HR
	@PostMapping(value = { "/HR-applyNewCandidate", "/applyCandidate" }, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> registerCandidate(@RequestBody AppliedCandidates appliedCandidates) {
		AppliedCandidates applycandidate = appliedCandidateService.register(appliedCandidates);
		String msg = "success";
		return ResponseEntity.status(201).body(msg);

	}

	// View Applied candidates by HR
	@GetMapping(value = "/viewAppliedCandidate")
	public ResponseEntity<Object> viewCandidate() {
		List<AppliedCandidates> apList = appliedCandidateService.appliedCandidateList();
		return ResponseEntity.status(201).body(apList);
	}

	// VIEW INTERVIEWER LIST
	@GetMapping(value = "/viewInterviewerList")
	public ResponseEntity<Object> interviewerlist() {
		List<ProjectLoginDetails> pjlist = projectLoginDetailsService.interviewerList();
		return ResponseEntity.status(201).body(pjlist);
	}

	// VIEW SELECTED CANDIDATES
	@GetMapping(value = "/viewSelectedList")
	public ResponseEntity<Object> selectedlist() {
		List<AppliedCandidates> seclist = appliedCandidateService.selectedcandidateList();
		return ResponseEntity.status(201).body(seclist);
	}

	// ACCEPT BY HR
	@PostMapping(value = "/Hr/accept/{candidateid}")
	public ResponseEntity<Object> acceptbyHR(@PathVariable("candidateid") int candId) {
		appliedCandidateService.acceptHR(candId);
		String msg = "success";
		return ResponseEntity.status(201).body(msg);
	}

	// REJECT BY HR
	@PostMapping(value = "/Hr/reject/{candidateid}")
	public ResponseEntity<Object> rejectbyHR(@PathVariable("candidateid") int candId) {
		appliedCandidateService.rejectHR(candId);
		String msg = "success";
		return ResponseEntity.status(201).body(msg);
	}

	// SEND HR INTERVIEW MAIL
	@PostMapping(value = "/Hr/HRinterviewMail /{candidateid}")
	public ResponseEntity<Object> nextlevelbyHR(@PathVariable("candidateid") int candId) {
		appliedCandidateService.nextlvlHRmail(candId);
		String msg = "success";
		return ResponseEntity.status(201).body(msg);
	}

	// HR ASSIGN INTERVIEWER
	@PostMapping(value = { "/HR/assignInterviewer/{candidateid}/{interviewerId}/{interviewerTime}" })
	public ResponseEntity<Object> assignInterviewer(@PathVariable("candidateid") int candId,
			@PathVariable("interviewerId") String interviewerId,
			@PathVariable("interviewerTime") String interviewerTime) {
		appliedCandidateService.HRassignIR(candId, interviewerId, interviewerTime);
		String msg = "success";
		return ResponseEntity.status(201).body(msg);
	}

	// ------------- INTERVIEWER-MODULE --------------------

	@PostMapping(value = "/IR/{username}")
	public ResponseEntity<Object> interviewer(@PathVariable("username") String username) {
		List<IRhistory> interviewerDetails = iRhistoryService.specificIR(username);
		return ResponseEntity.status(201).body(interviewerDetails);
	}

	// Interview list in(IR module 1st page)
	@PostMapping(value = "/IR/interviewList/{username}")
	public ResponseEntity<Object> interviewLIst(@PathVariable("username") String username) {
		List<AppliedCandidates> interviewList = appliedCandidateService.interviewList(username);
		return ResponseEntity.status(201).body(interviewList);
	}

	@PostMapping(value = "/IR/response/{candidateId}/{select}/{remarks}")
	public ResponseEntity<Object> irResponse(@PathVariable("candidateId") int candidateId,
			@PathVariable("select") String select, @PathVariable("remarks") String remarks) {
		appliedCandidateService.IRresponse(candidateId, select, remarks);
		String msg = "success";
		return ResponseEntity.status(201).body(msg);
	}

	// IR history table (register)
	@PostMapping(value = "/IR/Irhistory/{candidateId}")
	public ResponseEntity<Object> irHistory(@PathVariable("candidateId") int candidateId) {
		iRhistoryService.registerIRhistory(candidateId);
		String msg = "success";
		return ResponseEntity.status(201).body(msg);
	}

	// view All data in IR history table
	@GetMapping(value = "/IR/viewIRhistory")
	public ResponseEntity<Object> IRhistoryList() {

		List<IRhistory> irHistoryList = iRhistoryService.selectedHistory();
		return ResponseEntity.status(201).body(irHistoryList);

	}

	// IR history table (register) with interviewer name
	@PostMapping(value = "/IR/Irhistory/{candidateId}/{username}")
	public ResponseEntity<Object> irHistorysave(@PathVariable("candidateId") int candidateId,
			@PathVariable("username") String username) {
		iRhistoryService.registerHistory(candidateId, username);
		String msg = "success";
		return ResponseEntity.status(201).body(msg);
	}

	@PostMapping(value = "/IR/Ithistory/delete/{candidateId}")
	public ResponseEntity<Object> irHistorydelete(@PathVariable("candidateId") int candidateId) {
		iRhistoryService.deleteHistory(candidateId);
		String msg = "success";
		return ResponseEntity.status(201).body(msg);
	}

}
