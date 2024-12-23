package com.dac.project.services;

import java.util.List;

import com.dac.project.model.Getsolutionvalidation;
import com.dac.project.model.Solutionofproblem;

public interface SolutionproblemService {

	public void savesolution(Solutionofproblem solutionofproblem);

	public List<Solutionofproblem> getslotionlist(Getsolutionvalidation gsvl);

}
