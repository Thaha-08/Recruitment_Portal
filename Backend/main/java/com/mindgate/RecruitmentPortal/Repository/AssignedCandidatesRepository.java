package com.mindgate.RecruitmentPortal.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mindgate.RecruitmentPortal.beans.AssignedCandidate;

public interface AssignedCandidatesRepository  extends JpaRepository<AssignedCandidate, Integer>{

}
