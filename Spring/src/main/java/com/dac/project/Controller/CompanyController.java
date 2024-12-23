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
import com.dac.project.model.Customer;
import com.dac.project.model.Customerlistfetch;
import com.dac.project.model.DailyReportData;
import com.dac.project.model.FarmLogin;
import com.dac.project.model.FarmerProblems;
import com.dac.project.model.Farmerreportbyid;
import com.dac.project.model.Fetchbatch;
import com.dac.project.model.MyEmail;
import com.dac.project.model.OtpVerf;
import com.dac.project.model.Problemlistfarmer;
import com.dac.project.model.Solutionofproblem;
import com.dac.project.services.CompanyService;
import com.dac.project.services.CustomerServices;
import com.dac.project.services.DailyReportService;
import com.dac.project.services.EmailServices;
import com.dac.project.services.FarmerProblemService;
import com.dac.project.services.SolutionproblemService;






@RestController
@CrossOrigin
//@CrossOrigin(origins = "http://192.168.43.25:3000")
//@CrossOrigin(origins = "http://192.168.29.85:3000")

public class CompanyController {
	
	@Autowired
   CompanyService compservice;
    
	@Autowired
	DailyReportService dailyReportService;
	
	@Autowired
	FarmerProblemService farmerProblemService;
	
	@Autowired
	SolutionproblemService solutionproblemService;
	
	@Autowired
	CustomerServices customerServices;
	
	@Autowired
	EmailServices eml;
	
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
	
	
	 @PostMapping("/getfmdailyreport")
	    public List<DailyReportData> getFarmerDailyReport(@RequestBody Farmerreportbyid farmerreportbyid) {
		 System.out.println("inside server");
		 List<DailyReportData> ls=  (List<DailyReportData>)dailyReportService.getDailyReportByBid(farmerreportbyid);
		 System.out.println(ls);
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
	 
	 
	 @PostMapping("/saveproblemsolution")
	 public String saveproblemsolution(@RequestBody Solutionofproblem solutionofproblem)
	 {
		 solutionproblemService.savesolution(solutionofproblem);
		   
		 return "data successfully added ";
	 }
	 
	 
	  @PostMapping("/sendotp")
			public String sendMl(@RequestBody MyEmail ml) {
				
				System.out.println("In controleer" +ml);
				eml.sendOtpEmail(ml.getEmail());
				return "otp genrated";
			}
	 
	  
	  @PostMapping("/verify")
		public Boolean verifyOtp(@RequestBody OtpVerf otp) {
			System.out.println(otp);
			if(eml.getOtp().equals(otp.getOtp()) == true) 
			{
				otp.setOtp(null);
	
				return true;
			 
			 }
			else
				return false;
		}
	  
	  
	  @PostMapping("/registerCust")
		public Boolean registerCustomer(@RequestBody Customer customer) {
			
			Boolean res = customerServices.regCustomer(customer);
			return res;
		}
	  
	  @PostMapping("/getAllCustomers")
		public List<Customer> getCustomerDetails(@RequestBody Customerlistfetch custDt){
			
			
			List<Customer> cList = customerServices.getAllcust(custDt);
			
			return cList;
		}
	
}





