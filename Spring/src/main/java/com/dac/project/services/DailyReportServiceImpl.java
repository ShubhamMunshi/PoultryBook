package com.dac.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dac.project.Repository.DailyReportFarmerRepo;

import com.dac.project.model.DailyReportData;
import com.dac.project.model.Dailyrpforfarmerfetch;
import com.dac.project.model.Farmerreportbyid;
import com.dac.project.model.Fetchbatch;

@Service
public class DailyReportServiceImpl implements DailyReportService {
	
	@Autowired
	DailyReportFarmerRepo dailyReportFarmerRepo;

	@Override
	public void savedailyreportfarmer(DailyReportData dailyReportData) {
		     
		      dailyReportFarmerRepo.save(dailyReportData);
	}

//	@Override
//	public List<DailyReportData> getdailyrpot(String bid) {
//		
//	}

	@Override
	public List<DailyReportData> getDailyReportByBid(Farmerreportbyid farmerreportbyid) {
		List<DailyReportData> datta = (List<DailyReportData>)dailyReportFarmerRepo.findlistbyid(farmerreportbyid.getFarmerId(),farmerreportbyid.getCompanyId());
		return datta;
	 
	}

	@Override
	public List<DailyReportData> getdailyreportforfarmer(Dailyrpforfarmerfetch dailyrpforfarmerfetch) {
		List<DailyReportData> llst =(List<DailyReportData>)dailyReportFarmerRepo.finddailyreportbyids(dailyrpforfarmerfetch.getFarmerId(),dailyrpforfarmerfetch.getBatchNo(),dailyrpforfarmerfetch.getBatchId());
		return llst;
	}

	@Override
	public long gettotalmort(Dailyrpforfarmerfetch batch) {
		long a=  dailyReportFarmerRepo.gettotalmortbirds(batch.getFarmerId(),batch.getBatchId(),batch.getBatchNo());
		return a;
	}

	

}
