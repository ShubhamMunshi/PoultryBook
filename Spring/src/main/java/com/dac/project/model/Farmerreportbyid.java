package com.dac.project.model;

public class Farmerreportbyid {
	private String companyId;
	private String farmerId;
	public Farmerreportbyid() {
		super();
	}
	public Farmerreportbyid(String companyId, String farmerId) {
		super();
		this.companyId = companyId;
		this.farmerId = farmerId;
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
	@Override
	public String toString() {
		return "Farmerreportbyid [companyId=" + companyId + ", farmerId=" + farmerId + "]";
	}
	
		

}
