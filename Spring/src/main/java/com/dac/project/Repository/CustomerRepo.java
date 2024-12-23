package com.dac.project.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.dac.project.model.Customer;


public interface CustomerRepo extends CrudRepository<Customer,Long > {
	
	
	@Query("select c from Customer c where c.companyid = :n")
	 public List<Customer> getCustomers(@Param("n") String cid);
	
	 
		
	


}
