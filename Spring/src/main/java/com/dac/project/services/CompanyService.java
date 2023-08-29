package com.dac.project.services;

import java.util.List;

import com.dac.project.model.CompLogin;
import com.dac.project.model.Company;
import com.dac.project.model.FarmLogin;

public interface CompanyService {
//	public  Company saveCompany(Company company);

	public Company saveCompany(Company company);
	public List<Company> getAllComp();
	public Boolean checkfarmlogin(FarmLogin flg);
	public Boolean checkcomplogininfo(CompLogin cmplg);
	

	

}
