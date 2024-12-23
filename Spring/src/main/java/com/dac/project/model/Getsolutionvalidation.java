package com.dac.project.model;

public class Getsolutionvalidation {
	private String farmerId ;
	private String companyId;
	private long batchId ;
	private long batchNo ;
	public Getsolutionvalidation() {
		super();
	}
	public Getsolutionvalidation(String farmerId, String companyId, long batchId, long batchNo) {
		super();
		this.farmerId = farmerId;
		this.companyId = companyId;
		this.batchId = batchId;
		this.batchNo = batchNo;
	}
	public String getFarmerId() {
		return farmerId;
	}
	public void setFarmerId(String farmerId) {
		this.farmerId = farmerId;
	}
	public String getCompanyId() {
		return companyId;
	}
	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}
	public long getBatchId() {
		return batchId;
	}
	public void setBatchId(long batchId) {
		this.batchId = batchId;
	}
	public long getBatchNo() {
		return batchNo;
	}
	public void setBatchNo(long batchNo) {
		this.batchNo = batchNo;
	}
	@Override
	public String toString() {
		return "Getsolutionvalidation [farmerId=" + farmerId + ", companyId=" + companyId + ", batchId=" + batchId
				+ ", batchNo=" + batchNo + "]";
	}
	
	
	

}
