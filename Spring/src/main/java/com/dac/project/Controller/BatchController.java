package com.dac.project.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.dac.project.model.BatchRegistration;
import com.dac.project.services.BatchRegistrationService;

@RestController
@CrossOrigin
//@CrossOrigin(origins = "http://192.168.29.85:3000")
//@CrossOrigin(origins = "http://192.168.43.25:3000")
public class BatchController {
	
	@Autowired(required = true)
	 BatchRegistrationService batchRegistrationService;
	
	
	
	@PostMapping("/batchregister")
	@ResponseBody
	public String savebatch(@RequestBody BatchRegistration batchRegistration)
	{
		     batchRegistrationService.saveBatch(batchRegistration);
		     return "data added successfully";
	}

}
