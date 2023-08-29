package com.dac.project.model;

import jakarta.persistence.Entity;

import jakarta.persistence.Id;

@Entity
public class Company {
	
	
	private String companyname ;
	private String ownername ;
	private String companyemail ;
	private String companycontact;
	private String companyaddress ;
	@Id
	private String companyusername ;
	private String companypassword ;
	private String aboutcompany ;
	public Company() {
		super();
	}
	public Company(String companyname, String ownername, String companyemail, String companycontact,
			String companyaddress, String companyusername, String companypassword, String aboutcompany) {
		super();
		this.companyname = companyname;
		this.ownername = ownername;
		this.companyemail = companyemail;
		this.companycontact = companycontact;
		this.companyaddress = companyaddress;
		this.companyusername = companyusername;
		this.companypassword = companypassword;
		this.aboutcompany = aboutcompany;
	}
	public String getCompanyname() {
		return companyname;
	}
	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}
	public String getOwnername() {
		return ownername;
	}
	public void setOwnername(String ownername) {
		this.ownername = ownername;
	}
	public String getCompanyemail() {
		return companyemail;
	}
	public void setCompanyemail(String companyemail) {
		this.companyemail = companyemail;
	}
	public String getCompanycontact() {
		return companycontact;
	}
	public void setCompanycontact(String companycontact) {
		this.companycontact = companycontact;
	}
	public String getCompanyaddress() {
		return companyaddress;
	}
	public void setCompanyaddress(String companyaddress) {
		this.companyaddress = companyaddress;
	}
	public String getCompanyusername() {
		return companyusername;
	}
	public void setCompanyusername(String companyusername) {
		this.companyusername = companyusername;
	}
	public String getCompanypassword() {
		return companypassword;
	}
	public void setCompanypassword(String companypassword) {
		this.companypassword = companypassword;
	}
	public String getAboutcompany() {
		return aboutcompany;
	}
	public void setAboutcompany(String aboutcompany) {
		this.aboutcompany = aboutcompany;
	}
	@Override
	public String toString() {
		return "Company [companyname=" + companyname + ", ownername=" + ownername + ", companyemail=" + companyemail
				+ ", companycontact=" + companycontact + ", companyaddress=" + companyaddress + ", companyusername="
				+ companyusername + ", companypassword=" + companypassword + ", aboutcompany=" + aboutcompany + "]";
	}
	
	
}