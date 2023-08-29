package com.dac.project.model;

public class Fetchbatch {
       private String compid ;
       private String farmid ;
	public Fetchbatch() {
		super();
	}
	public Fetchbatch(String compid, String farmid) {
		super();
		this.compid = compid;
		this.farmid = farmid;
	}
	public String getCompid() {
		return compid;
	}
	public void setCompid(String compid) {
		this.compid = compid;
	}
	public String getFarmid() {
		return farmid;
	}
	public void setFarmid(String farmid) {
		this.farmid = farmid;
	}
	@Override
	public String toString() {
		return "Fetchbatch [compid=" + compid + ", farmid=" + farmid + "]";
	}
       
       
}
