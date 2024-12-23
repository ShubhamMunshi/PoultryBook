package com.dac.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dac.project.Repository.SoulutionproblemRepo;
import com.dac.project.model.Getsolutionvalidation;
import com.dac.project.model.Solutionofproblem;

@Service
public class SoulutionproblemserviceImple implements SolutionproblemService {

	
	@Autowired
	SoulutionproblemRepo soulutionproblemRepo;
	
	@Override
	public void savesolution(Solutionofproblem solutionofproblem) {
		
		   soulutionproblemRepo.save(solutionofproblem);
	}

	@Override
	public List<Solutionofproblem> getslotionlist(Getsolutionvalidation gsvl) {
		List<Solutionofproblem>  ls = soulutionproblemRepo.getlistofsolution(gsvl.getFarmerId(),gsvl.getCompanyId(),gsvl.getBatchId(),gsvl.getBatchNo());
		 
		return ls;
	}

}
