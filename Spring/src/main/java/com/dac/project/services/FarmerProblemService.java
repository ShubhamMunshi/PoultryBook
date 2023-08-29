package com.dac.project.services;

import java.util.List;

import com.dac.project.model.FarmerProblems;
import com.dac.project.model.Problemlistfarmer;

public interface FarmerProblemService
{

	public void saveproblem(FarmerProblems farmerProblems);

	public List<FarmerProblems> getallproblems(Problemlistfarmer problemlistfarmer);

}
