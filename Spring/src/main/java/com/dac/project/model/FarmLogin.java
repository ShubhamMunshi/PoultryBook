package com.dac.project.model;


public class FarmLogin {

	private String farid ;
	private String farpass;
	public FarmLogin(String farid, String farpass) {
		super();
		this.farid = farid;
		this.farpass = farpass;
	}
	public FarmLogin() {
		super();
	}
	public String getFarid() {
		return farid;
	}
	public void setFarid(String farid) {
		this.farid = farid;
	}
	public String getFarpass() {
		return farpass;
	}
	public void setFarpass(String farpass) {
		this.farpass = farpass;
	}
	@Override
	public String toString() {
		return "FarmLogin [farid=" + farid + ", farpass=" + farpass + "]";
	}
	
}
