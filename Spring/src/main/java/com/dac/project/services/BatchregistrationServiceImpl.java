package com.dac.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dac.project.Repository.BatchRegisterRepo;

import com.dac.project.model.BatchRegistration;
import com.dac.project.model.CloseBatch;
import com.dac.project.model.Dailyrpforfarmerfetch;

@Service
public class BatchregistrationServiceImpl implements BatchRegistrationService {
    @Autowired
	BatchRegisterRepo batchRegisterRepo;
	 
	
	@Override
	public void saveBatch(BatchRegistration batchRegistration) {
	              batchRegisterRepo.save(batchRegistration);
		          batchRegisterRepo.deleteById(batchRegistration.getBatchId());
		          batchRegisterRepo.save(batchRegistration);
	}


	@Override
	public BatchRegistration getbatchdetai(String farmid) {
	         
		BatchRegistration res1 = batchRegisterRepo.getbatch(farmid);
	          return res1;
	}


	@Override
	public void closebatchh(CloseBatch clbatch) {
		     BatchRegistration stbt =    batchRegisterRepo.findById(clbatch.getBatchId()).get();
		            stbt.setBatchStatus(false);
		         batchRegisterRepo.save(stbt);
		           
		                   
	}


	@Override
	public long gettotalbirds(Dailyrpforfarmerfetch batch) {
		 BatchRegistration   b = batchRegisterRepo.findById(batch.getBatchId()).get();
		   long s = b.getTotalBirds();
		   
		return s;
	}


	

}
