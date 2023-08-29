package com.dac.project.Repository;


import org.springframework.data.repository.CrudRepository;


import com.dac.project.model.Company;


public interface CompanyRepository extends CrudRepository<Company, String> {
	
	
	
}

