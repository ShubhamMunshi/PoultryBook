package com.dac.project.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
@Entity
public class Customer {
	@Id
	@GeneratedValue
	private long customerid;
	
	
	private String customername;
	private Long customercontact;
	private String customeremail;
	private String customeraddress;
	private String companyid;
	public Customer() {
		super();
	}
	public Customer(long customerid, String customername, Long customercontact, String customeremail,
			String customeraddress, String companyid) {
		super();
		this.customerid = customerid;
		this.customername = customername;
		this.customercontact = customercontact;
		this.customeremail = customeremail;
		this.customeraddress = customeraddress;
		this.companyid = companyid;
	}
	public Customer(String customername, Long customercontact, String customeremail, String customeraddress,
			String companyid) {
		super();
		this.customername = customername;
		this.customercontact = customercontact;
		this.customeremail = customeremail;
		this.customeraddress = customeraddress;
		this.companyid = companyid;
	}
	public long getCustomerid() {
		return customerid;
	}
	public void setCustomerid(long customerid) {
		this.customerid = customerid;
	}
	public String getCustomername() {
		return customername;
	}
	public void setCustomername(String customername) {
		this.customername = customername;
	}
	public Long getCustomercontact() {
		return customercontact;
	}
	public void setCustomercontact(Long customercontact) {
		this.customercontact = customercontact;
	}
	public String getCustomeremail() {
		return customeremail;
	}
	public void setCustomeremail(String customeremail) {
		this.customeremail = customeremail;
	}
	public String getCustomeraddress() {
		return customeraddress;
	}
	public void setCustomeraddress(String customeraddress) {
		this.customeraddress = customeraddress;
	}
	public String getCompanyid() {
		return companyid;
	}
	public void setCompanyid(String companyid) {
		this.companyid = companyid;
	}
	@Override
	public String toString() {
		return "Customer [customerid=" + customerid + ", customername=" + customername + ", customercontact="
				+ customercontact + ", customeremail=" + customeremail + ", customeraddress=" + customeraddress
				+ ", companyid=" + companyid + "]";
	}
	
	
}