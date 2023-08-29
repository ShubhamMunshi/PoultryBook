package com.dac.project.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.dac.project.model.FarmerProblems;

public interface FarmerProblemRepo extends CrudRepository<FarmerProblems, Long> {

	
	@Query("select d from FarmerProblems d where d.companyId=:n")
 public	List<FarmerProblems> findallbycompid(@Param("n") String companyId);

}
