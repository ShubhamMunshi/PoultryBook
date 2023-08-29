package com.dac.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dac.project.Repository.FarmerProblemRepo;
import com.dac.project.model.FarmerProblems;
import com.dac.project.model.Problemlistfarmer;

@Service
public class FarmerProblemServImpl implements FarmerProblemService {

	@Autowired
	FarmerProblemRepo farmerProblemRepo;
	
	@Override
	public void saveproblem(FarmerProblems farmerProblems) {
		
		   farmerProblemRepo.save(farmerProblems);
	}

	@Override
	public List<FarmerProblems> getallproblems(Problemlistfarmer problemlistfarmer) {
		return   farmerProblemRepo.findallbycompid(problemlistfarmer.getCompanyId());
		
	}

	

}
