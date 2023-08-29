package com.dac.project.model;

public class CloseBatch {
	
	   private long batchId ;
	 private String farmerId;
	   private String companyId ;
	public CloseBatch() {
		super();
	}
	public long getBatchId() {
		return batchId;
	}
	public void setBatchId(long batchId) {
		this.batchId = batchId;
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
	@Override
	public String toString() {
		return "closeBatch [batchId=" + batchId + ", farmerId=" + farmerId + ", companyId=" + companyId + "]";
	}
	   
	   

}
