package com.dac.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dac.project.Repository.CustomerRepo;
import com.dac.project.model.Customer;
import com.dac.project.model.Customerlistfetch;

@Service
public class CustomerServices {
	
	@Autowired
	CustomerRepo custRepo;
	

	public Boolean regCustomer(Customer customer) {
		
		custRepo.save(customer);
		
		return true;
	}


	

	public List<Customer> getAllcust(Customerlistfetch custDt) {
		
		List<Customer> list = custRepo.getCustomers(custDt.getCompanyId());
		return list;
	}


}
