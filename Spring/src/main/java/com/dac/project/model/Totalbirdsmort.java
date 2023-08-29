package com.dac.project.model;

public class Totalbirdsmort {
	
	private long totalbirds ;
	private long totalmorts ;
	public Totalbirdsmort() {
		super();
	}
	public Totalbirdsmort(long totalbirds, long totalmorts) {
		super();
		this.totalbirds = totalbirds;
		this.totalmorts = totalmorts;
	}
	public long getTotalbirds() {
		return totalbirds;
	}
	public void setTotalbirds(long totalbirds) {
		this.totalbirds = totalbirds;
	}
	public long getTotalmorts() {
		return totalmorts;
	}
	public void setTotalmorts(long totalmorts) {
		this.totalmorts = totalmorts;
	}
	@Override
	public String toString() {
		return "Totalbirdsmort [totalbirds=" + totalbirds + ", totalmorts=" + totalmorts + "]";
	}
	

}
