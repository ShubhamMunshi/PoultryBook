package com.dac.project.model;

public class Farmerlist {
	
	private String companyId;

	public Farmerlist() {
		super();
	}

	public Farmerlist(String companyId) {
		super();
		this.companyId = companyId;
	}

	public String getCompanyId() {
		return companyId;
	}

	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}

	@Override
	public String toString() {
		return "Farmerlist [companyId=" + companyId + "]";
	}
	

}
