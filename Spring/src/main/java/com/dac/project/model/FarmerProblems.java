package com.dac.project.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class FarmerProblems {
	
	@Id
	@GeneratedValue
	private long srNo;
	private String farmerId ;
	private long batchNo ;
	private long batchId ;
	private String companyId ;
	private LocalDate ldtt ;
	private String selectedProblem;
	private String remark ;
	private String problemImg ;
	public FarmerProblems() {
		super();
	}
	public FarmerProblems(long srNo, String farmerId, long batchNo, long batchId, String companyId, LocalDate ldtt,
			String selectedProblem, String remark, String problemImg) {
		super();
		this.srNo = srNo;
		this.farmerId = farmerId;
		this.batchNo = batchNo;
		this.batchId = batchId;
		this.companyId = companyId;
		this.ldtt = ldtt;
		this.selectedProblem = selectedProblem;
		this.remark = remark;
		this.problemImg = problemImg;
	}
	public FarmerProblems(String farmerId, long batchNo, long batchId, String companyId, LocalDate ldtt,
			String selectedProblem, String remark, String problemImg) {
		super();
		this.farmerId = farmerId;
		this.batchNo = batchNo;
		this.batchId = batchId;
		this.companyId = companyId;
		this.ldtt = ldtt;
		this.selectedProblem = selectedProblem;
		this.remark = remark;
		this.problemImg = problemImg;
	}
	public long getSrNo() {
		return srNo;
	}
	public void setSrNo(long srNo) {
		this.srNo = srNo;
	}
	public String getFarmerId() {
		return farmerId;
	}
	public void setFarmerId(String farmerId) {
		this.farmerId = farmerId;
	}
	public long getBatchNo() {
		return batchNo;
	}
	public void setBatchNo(long batchNo) {
		this.batchNo = batchNo;
	}
	public long getBatchId() {
		return batchId;
	}
	public void setBatchId(long batchId) {
		this.batchId = batchId;
	}
	public String getCompanyId() {
		return companyId;
	}
	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}
	public LocalDate getLdtt() {
		return ldtt;
	}
	public void setLdtt(LocalDate ldtt) {
		this.ldtt = ldtt;
	}
	public String getSelectedProblem() {
		return selectedProblem;
	}
	public void setSelectedProblem(String selectedProblem) {
		this.selectedProblem = selectedProblem;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String getProblemImg() {
		return problemImg;
	}
	public void setProblemImg(String problemImg) {
		this.problemImg = problemImg;
	}
	@Override
	public String toString() {
		return "FarmerProblems [srNo=" + srNo + ", farmerId=" + farmerId + ", batchNo=" + batchNo + ", batchId="
				+ batchId + ", companyId=" + companyId + ", ldtt=" + ldtt + ", selectedProblem=" + selectedProblem
				+ ", remark=" + remark + ", problemImg=" + problemImg + "]";
	}
	
	
	

}
