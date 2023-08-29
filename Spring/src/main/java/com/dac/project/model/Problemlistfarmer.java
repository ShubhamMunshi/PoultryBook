package com.dac.project.model;

public class Problemlistfarmer {
   
	private String companyId;

	public Problemlistfarmer() {
		super();
	}

	public Problemlistfarmer(String companyId) {
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
		return "Problemlistfarmer [companyId=" + companyId + "]";
	}
	
	
}
