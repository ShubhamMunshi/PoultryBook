package com.dac.project.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class DailyReportData {
    private String companyId ;
    private String farmerId ;
    private Long  batchId;
    
    @Id
    @GeneratedValue
    private Long srNo ;
   
    
     private int day;
    private Boolean status;
    private LocalDate date ;
    private long mort ;
    private long feedIntake ;
    private  long bodyWieght ;
    private long batchNo;
	public DailyReportData() {
		super();
	}
	public DailyReportData(String companyId, String farmerId, Long batchId, int day, Boolean status, LocalDate date,
			long mort, long feedIntake, long bodyWieght, long batchNo) {
		super();
		this.companyId = companyId;
		this.farmerId = farmerId;
		this.batchId = batchId;
		this.day = day;
		this.status = status;
		this.date = date;
		this.mort = mort;
		this.feedIntake = feedIntake;
		this.bodyWieght = bodyWieght;
		this.batchNo = batchNo;
	}
	public DailyReportData(String companyId, String farmerId, Long batchId, Long srNo, int day, Boolean status,
			LocalDate date, long mort, long feedIntake, long bodyWieght, long batchNo) {
		super();
		this.companyId = companyId;
		this.farmerId = farmerId;
		this.batchId = batchId;
		this.srNo = srNo;
		this.day = day;
		this.status = status;
		this.date = date;
		this.mort = mort;
		this.feedIntake = feedIntake;
		this.bodyWieght = bodyWieght;
		this.batchNo = batchNo;
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
	public Long getBatchId() {
		return batchId;
	}
	public void setBatchId(Long batchId) {
		this.batchId = batchId;
	}
	public Long getSrNo() {
		return srNo;
	}
	public void setSrNo(Long srNo) {
		this.srNo = srNo;
	}
	public int getDay() {
		return day;
	}
	public void setDay(int day) {
		this.day = day;
	}
	public Boolean getStatus() {
		return status;
	}
	public void setStatus(Boolean status) {
		this.status = status;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public long getMort() {
		return mort;
	}
	public void setMort(long mort) {
		this.mort = mort;
	}
	public long getFeedIntake() {
		return feedIntake;
	}
	public void setFeedIntake(long feedIntake) {
		this.feedIntake = feedIntake;
	}
	public long getBodyWieght() {
		return bodyWieght;
	}
	public void setBodyWieght(long bodyWieght) {
		this.bodyWieght = bodyWieght;
	}
	public long getBatchNo() {
		return batchNo;
	}
	public void setBatchNo(long batchNo) {
		this.batchNo = batchNo;
	}
	@Override
	public String toString() {
		return "DailyReportData [companyID=" + companyId + ", farmerId=" + farmerId + ", batchId=" + batchId + ", srNo="
				+ srNo + ", day=" + day + ", status=" + status + ", date=" + date + ", mort=" + mort + ", feedIntake="
				+ feedIntake + ", bodyWieght=" + bodyWieght + ", batchNo=" + batchNo + "]";
	}
 	
	
}
	