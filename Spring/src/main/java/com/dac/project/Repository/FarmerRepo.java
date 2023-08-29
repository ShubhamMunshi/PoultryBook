package com.dac.project.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.dac.project.model.Farmer;




public interface FarmerRepo extends CrudRepository<Farmer, String>{

	
@Query("select s from Farmer s where s.companyId= :n")	
 public	List<Farmer> findAllbycompanyid(@Param("n")	String companyId);

	

}
