package com.dac.project.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.dac.project.model.BatchRegistration;
import com.dac.project.model.CloseBatch;
import com.dac.project.model.DailyReportData;
import com.dac.project.model.Dailyrpforfarmerfetch;
import com.dac.project.model.Farmer;
import com.dac.project.model.FarmerProblems;
import com.dac.project.model.Farmerlist;
import com.dac.project.model.Fetchbatch;
import com.dac.project.model.Totalbirdsmort;
import com.dac.project.services.BatchRegistrationService;
import com.dac.project.services.DailyReportService;
import com.dac.project.services.FarmerProblemService;
import com.dac.project.services.FarmerService;

@RestController
@CrossOrigin
//@CrossOrigin(origins = "http://192.168.29.85:3000")
public class FarmerController {
	  
	@Autowired
	 FarmerService farmerService;
	
	@Autowired
	DailyReportService dailyReportService;
	
	@Autowired
	BatchRegistrationService batchRegistrationService;
	  
	 @Autowired
	 FarmerProblemService farmerProblemService;


	@PostMapping("/FarmerRegistration")
	@ResponseBody
	public String savefarmerdata(@RequestBody Farmer farmer)
	{
	         farmerService.savefarmdata(farmer);
	         System.out.println(farmer);
	         return "farmer added";

	}
	
	@GetMapping("/Getfarm/{id}")
	public Farmer getfarmer(@PathVariable ("id") String fid)
	{
		return farmerService.getdetails(fid);
	}
	
	@PostMapping("/FarmerList")
	public List<Farmer> getAllFarmer(@RequestBody Farmerlist farmerlist)
	{
		
		
		List<Farmer> fm = (List<Farmer>)farmerService.getFarmerList(farmerlist);
		System.out.println(fm);
		return (List<Farmer>)farmerService.getFarmerList(farmerlist);
	}
	
	
	@PostMapping("/getbatchdetail")
	public BatchRegistration getbatchdetail(@RequestBody Fetchbatch fetchbatch)
	{      
		System.out.println(fetchbatch);
		BatchRegistration res = batchRegistrationService.getbatchdetai(fetchbatch.getFarmid());
		System.out.println(res);
		return res;
	}
	
	@PutMapping("/closebatch")
	public String closebatch(@RequestBody  CloseBatch clbatch)
	{
		System.out.println(clbatch);
	
		batchRegistrationService.closebatchh(clbatch);
		
		return "batch closed successfully";
		
	}
	
	@PostMapping("/dailyreportfarmer")
	public String savedailyreport (@RequestBody DailyReportData dailyReportData)
	{
		dailyReportService.savedailyreportfarmer(dailyReportData);
		return "daily rport data added successfully";
	}
	
	
	@PostMapping("/getdailyrepforfarmer")
	public List<DailyReportData> getdtilforfarmer(@RequestBody Dailyrpforfarmerfetch dailyrpforfarmerfetch)
	{
		
	 List<DailyReportData> listofdetail  =	(List<DailyReportData>)dailyReportService.getdailyreportforfarmer(dailyrpforfarmerfetch);
		
	   System.out.println(listofdetail);
	   return listofdetail;
		
}
	  
	   
	 
		
	
		
	
	
	@PostMapping("/getmorttotalbirds")
	public Totalbirdsmort getmorttotbirds(@RequestBody Dailyrpforfarmerfetch batch)
	{
		try {
		System.out.println("inside controller");
		System.out.println(batch.getBatchId());
		System.out.println(batch.getFarmerId());
		Totalbirdsmort tb = new Totalbirdsmort();
		tb.setTotalbirds(batchRegistrationService.gettotalbirds(batch));
		tb.setTotalmorts(dailyReportService.gettotalmort(batch));
		return tb;
		}
		catch (Exception e) {
		    return null ;
		}
	}
	
	
	 @PostMapping("/upload")
	    public String uploadFile(@RequestParam("file") MultipartFile file) {
	        // Handle file upload logic and save the file to a directory
	        // You can also save file details to the database here
                String newNam = farmerService.uploadimg(file);
	        return newNam;
	    }
	
	 @PostMapping("/uploadproblem")
	    public String uploadProblem(@RequestParam("file") MultipartFile file) {
	        // Handle file upload logic and save the file to a directory
	        // You can also save file details to the database here
             String newNam = farmerService.uploadprob(file);
	        return newNam;
	    }
	
	  @PostMapping("/sendproblem")
	  @ResponseBody
	  public String sendproblem (@RequestBody FarmerProblems farmerProblems)
	  {
		           farmerProblemService.saveproblem(farmerProblems);
		           return "problem saved successfully";
	  }
	
	
}
