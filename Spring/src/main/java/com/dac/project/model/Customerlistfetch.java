package com.dac.project.model;

public class Customerlistfetch {
	
	private String companyId;

	public Customerlistfetch() {
		super();
	}

	public Customerlistfetch(String companyId) {
		super();
		this.companyId = companyId;
	}

	@Override
	public String toString() {
		return "Customerlistfetch [companyId=" + companyId + "]";
	}

	public String getCompanyId() {
		return companyId;
	}

	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}

	

	


}
