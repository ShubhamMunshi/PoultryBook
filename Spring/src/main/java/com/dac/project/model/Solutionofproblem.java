package com.dac.project.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Solutionofproblem {
	
	@Id
	@GeneratedValue
	private long solutionId;
	private String companyId ;
	private String farmerId ;
	private long batchId ;
	private int batchNo ;
	private long problemId ;
	private String problem ;
	private String remark ;
	private String solution ;
	public Solutionofproblem() {
		super();
	}
	public Solutionofproblem(long solutionId, String companyId, String farmerId, long batchId, int batchNo,
			long problemId, String problem, String remark, String solution) {
		super();
		this.solutionId = solutionId;
		this.companyId = companyId;
		this.farmerId = farmerId;
		this.batchId = batchId;
		this.batchNo = batchNo;
		this.problemId = problemId;
		this.problem = problem;
		this.remark = remark;
		this.solution = solution;
	}
	public Solutionofproblem(String companyId, String farmerId, long batchId, int batchNo, long problemId,
			String problem, String remark, String solution) {
		super();
		this.companyId = companyId;
		this.farmerId = farmerId;
		this.batchId = batchId;
		this.batchNo = batchNo;
		this.problemId = problemId;
		this.problem = problem;
		this.remark = remark;
		this.solution = solution;
	}
	public long getSolutionId() {
		return solutionId;
	}
	public void setSolutionId(long solutionId) {
		this.solutionId = solutionId;
	}
	public String getCompanyId() {
		return companyId;
	}
	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}
	public String getFarmerId() {
		return farmerId;
	}
	public void setFarmerId(String farmerId) {
		this.farmerId = farmerId;
	}
	public long getBatchId() {
		return batchId;
	}
	public void setBatchId(long batchId) {
		this.batchId = batchId;
	}
	public int getBatchNo() {
		return batchNo;
	}
	public void setBatchNo(int batchNo) {
		this.batchNo = batchNo;
	}
	public long getProblemId() {
		return problemId;
	}
	public void setProblemId(long problemId) {
		this.problemId = problemId;
	}
	public String getProblem() {
		return problem;
	}
	public void setProblem(String problem) {
		this.problem = problem;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String getSolution() {
		return solution;
	}
	public void setSolution(String solution) {
		this.solution = solution;
	}
	@Override
	public String toString() {
		return "Solutionofproblem [solutionId=" + solutionId + ", companyId=" + companyId + ", farmerId=" + farmerId
				+ ", batchId=" + batchId + ", batchNo=" + batchNo + ", problemId=" + problemId + ", problem=" + problem
				+ ", remark=" + remark + ", solution=" + solution + "]";
	}
	
	
	

}
