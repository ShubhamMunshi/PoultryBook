package com.dac.project.services;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.dac.project.Repository.FarmerRepo;

import com.dac.project.model.Farmer;
import com.dac.project.model.Farmerlist;


@Service
public class FarmerServiceImpl implements FarmerService {

	@Autowired
	FarmerRepo farmerRepo ;
	
	@Autowired
	Createuniquekey cnm;

	@Override
	public void savefarmdata(Farmer farmer) {
	    	 farmerRepo.save(farmer);
	  
	}

    @Override
	public Farmer getdetails(String fid) {
	
			 Farmer gtdata = farmerRepo.findById(fid).get();
			return gtdata;
	
	}

	@Override
	public List<Farmer> getFarmerList(Farmerlist farmerlist) {
		 List<Farmer> lst = (List<Farmer> ) farmerRepo.findAllbycompanyid(farmerlist.getCompanyId());
		return lst;
	}

	@Override
	public String uploadimg(MultipartFile file) {
		try {
			final String fullPath= new ClassPathResource("static/images/").getFile().getAbsolutePath();
			String newName = cnm.unique(file.getOriginalFilename());
			
			Files.copy(file.getInputStream(),Paths.get(fullPath+File.separator+newName),StandardCopyOption.REPLACE_EXISTING);
			
			return newName;
			
		} catch (IOException e) {
			
			return "File not uploaded";
		}

		
	}

	@Override
	public String uploadprob(MultipartFile file) {
		try {
			final String fullPath= new ClassPathResource("static/images/problems/").getFile().getAbsolutePath();
			String newName = cnm.unique(file.getOriginalFilename());
			
			Files.copy(file.getInputStream(),Paths.get(fullPath+File.separator+newName),StandardCopyOption.REPLACE_EXISTING);
			
			return newName;
			
		} catch (IOException e) {
			
			return "File not uploaded";
		}
	}

	

	


	
	

}
