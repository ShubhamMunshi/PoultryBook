package com.dac.project.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.dac.project.model.Solutionofproblem;

public interface SoulutionproblemRepo extends CrudRepository<Solutionofproblem,Long> {

	
	@Query("select d from Solutionofproblem d where d.farmerId=:n and d.batchNo=:m and d.batchId=:k and d.companyId=:p")
	public  List<Solutionofproblem> getlistofsolution(@Param("n") String farmerId,@Param("p") String companyId,@Param("k") long batchId,@Param("m") long batchNo);

}
