package com.dac.project.model;

public class Dailyrpforfarmerfetch {
  private String farmerId ;
  private long batchId ;
  private long batchNo;
public Dailyrpforfarmerfetch() {
	super();
}
public Dailyrpforfarmerfetch(String farmerId, long batchId, long batchNo) {
	super();
	this.farmerId = farmerId;
	this.batchId = batchId;
	this.batchNo = batchNo;
}
public String getFarmerId() {
	return farmerId;
}
public void setFarmerId(String farmerId) {
	this.farmerId = farmerId;
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
	return "Dailyrpforfarmerfetch [farmerId=" + farmerId + ", batchId=" + batchId + ", batchNo=" + batchNo + "]";
}
  
  
}
