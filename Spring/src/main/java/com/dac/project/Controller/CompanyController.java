package com.dac.project.Controller;


import java.io.File;
import java.io.IOException;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.dac.project.model.CompLogin;
import com.dac.project.model.Company;
import com.dac.project.model.DailyReportData;
import com.dac.project.model.FarmLogin;
import com.dac.project.model.FarmerProblems;
import com.dac.project.model.Problemlistfarmer;
import com.dac.project.services.CompanyService;
import com.dac.project.services.DailyReportService;
import com.dac.project.services.FarmerProblemService;






@RestController
@CrossOrigin
//@CrossOrigin(origins = "http://192.168.29.85:3000")

public class CompanyController {
	
	@Autowired
   CompanyService compservice;
    
	@Autowired
	DailyReportService dailyReportService;
	
	@Autowired
	FarmerProblemService farmerProblemService;
	
	@PostMapping("/CompanyRegistration")
	@ResponseBody
	public String add(@RequestBody Company company)
	{
		this.compservice.saveCompany(company);
	   System.out.println(company);
		 return "Success";
		
	}
	
	
	
	@GetMapping("/AllCompany")
	public List<Company> getAllComp()
	{
		return compservice.getAllComp();
	}
	
	
	@PostMapping("/FarmerLogin")
	@ResponseBody
	public Boolean farmloginchk(@RequestBody FarmLogin flg)
//	public Boolean farmloginchk(@RequestBody FarmLogin flg,HttpSession ses)
	{  
	   Boolean ans = compservice.checkfarmlogin(flg);
		System.out.println(flg);
		if(ans)
		{
//			ses.setAttribute(null, flg);
		  System.out.println(ans);
		return ans;
		}
		else return false;
	}
	
	@PostMapping("/Companylogin")
	@ResponseBody
	public Boolean complgncheck(@RequestBody CompLogin cmplg )
	{
	    Boolean ansc  =compservice.checkcomplogininfo(cmplg);
		System.out.println(cmplg);
		return ansc;
	}
	
	
	 @GetMapping("/getfmdailyreport/{id}")
	    public List<DailyReportData> getFarmerDailyReport(@PathVariable("id") String bid) {
		 System.out.println("inside server");
		 List<DailyReportData> ls=  (List<DailyReportData>)dailyReportService.getDailyReportByBid(bid);
	        return ls;
	    }
	 
	 
	 
	 @GetMapping("/getproblemimage/{imageName}")
	 public ResponseEntity<byte[]> getProblemImage(@PathVariable String imageName) {
	     try {
	         final String fullPath = new ClassPathResource("static/images/problems/").getFile().getAbsolutePath();
	         Path imagePath = Paths.get(fullPath + File.separator + imageName);
	         byte[] imageBytes = Files.readAllBytes(imagePath);
	         HttpHeaders headers = new HttpHeaders();
	         headers.setContentType(MediaType.IMAGE_JPEG); // Adjust content type as needed
	         return new ResponseEntity<byte[]>(imageBytes, headers, HttpStatus.OK);
	     } catch (IOException e) {
	         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
	     }
	 }
	 
	 
	 @PostMapping("/getfarmerproblemslist")
	 public List<FarmerProblems> getfarmerproblems(@RequestBody Problemlistfarmer problemlistfarmer )
	 {
		 return farmerProblemService.getallproblems(problemlistfarmer);
	 }
	 
	
}


