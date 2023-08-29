package com.dac.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.dac.project.Repository.CompanyRepository;
import com.dac.project.Repository.FarmerRepo;
import com.dac.project.model.CompLogin;
import com.dac.project.model.Company;
import com.dac.project.model.FarmLogin;
import com.dac.project.model.Farmer;


@Service
public class CompanyServiceImpl implements CompanyService {

	@Autowired
	CompanyRepository compRepository ;
	
	@Autowired
	FarmerRepo farmerRepo;
	
	
	
	public CompanyServiceImpl(CompanyRepository compRepository) {
		super();
		this.compRepository = compRepository;
	}


	@Override
	public Company saveCompany(Company company) {	
		
		    
	      compRepository.save(company) ;
	    
	      return company;
	}

	@Override
	public List<Company> getAllComp() {
		List<Company> lst = (List<Company>)compRepository.findAll();
		return lst;
		
		
	}


	@Override
	public Boolean checkfarmlogin(FarmLogin flg) {
	 try {        
	  Farmer fm =farmerRepo.findById(flg.getFarid()).get();
//	  System.out.println(fm);
	  if(flg.getFarpass().equals(fm.getFarmPass())&& flg.getFarid().equals(fm.getFarmerId()))
		return true;
	  else
		  return false;
	}
	 catch(Exception e)
	 {
		 return false;
	 }
		 
	 }


	@Override
	public Boolean checkcomplogininfo(CompLogin cmplg) {
		
	try {	
	 Company cpmdt =compRepository.findById(cmplg.getCompid()).get();
	 
	  if(cmplg.getCompid().equals(cpmdt.getCompanyusername())&& cmplg.getComppass().equals(cpmdt.getCompanypassword()))
	  {
		  return true;
	  }
		return false;
	}
	
	catch(Exception e)
	{
		return false;
	}
	



}
}
