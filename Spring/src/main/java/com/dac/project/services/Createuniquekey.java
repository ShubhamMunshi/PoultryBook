package com.dac.project.services;

import java.util.UUID;

import org.springframework.stereotype.Service;

@Service
public class Createuniquekey {
private String uniqNm;
	
	public String unique(String origName) {
		String extn = origName.substring(origName.lastIndexOf('.'));
		uniqNm = UUID.randomUUID().toString()+ extn;
		return uniqNm;
	}

	
	

	public Createuniquekey() {
		super();
	}




	public String getUniqNm() {
		return uniqNm;
	}

}
