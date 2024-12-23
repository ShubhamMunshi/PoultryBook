package com.dac.project.services;

import java.util.List;


import com.dac.project.model.DailyReportData;
import com.dac.project.model.Dailyrpforfarmerfetch;
import com.dac.project.model.Farmerreportbyid;
import com.dac.project.model.Fetchbatch;


public interface DailyReportService {

	public void savedailyreportfarmer(DailyReportData dailyReportData);

	

	public List<DailyReportData> getDailyReportByBid(Farmerreportbyid farmerreportbyid);







	public List<DailyReportData> getdailyreportforfarmer(Dailyrpforfarmerfetch dailyrpforfarmerfetch);



	public long gettotalmort(Dailyrpforfarmerfetch batch);

}
