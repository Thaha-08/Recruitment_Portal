package com.mindgate.RecruitmentPortal.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mindgate.RecruitmentPortal.beans.JobDescription;

public interface JobDescriptionRepository extends JpaRepository<JobDescription,Integer>{

	@Query(value=" SELECT * FROM JobDescription p WHERE p.jobRole LIKE ?1" ,nativeQuery = true)
	List<JobDescription>search(String keyword);
}