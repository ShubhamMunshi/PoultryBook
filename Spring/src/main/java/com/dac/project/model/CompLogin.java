package com.dac.project.model;

public class CompLogin {

	private String compid;
	private String comppass;
	public CompLogin() {
		super();
	}
	public CompLogin(String compid, String comppass) {
		super();
		this.compid = compid;
		this.comppass = comppass;
	}
	public String getCompid() {
		return compid;
	}
	public void setCompid(String compid) {
		this.compid = compid;
	}
	public String getComppass() {
		return comppass;
	}
	public void setComppass(String comppass) {
		this.comppass = comppass;
	}
	@Override
	public String toString() {
		return "CompLogin [compid=" + compid + ", comppass=" + comppass + "]";
	}
	
}
