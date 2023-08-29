package com.dac.project.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.dac.project.model.DailyReportData;

public interface DailyReportFarmerRepo extends CrudRepository<DailyReportData, Long> {

	
	@Query("SELECT drd FROM DailyReportData drd WHERE drd.batchId = :bid")
  public  List<DailyReportData> findlistbyid(String bid);

	@Query("select d from DailyReportData d where d.farmerId=:n and d.batchNo=:m and d.batchId=:k")
	public List<DailyReportData> finddailyreportbyids(@Param("n") String farmerId,@Param("m") long batchNo,@Param("k") long batchId );




@Query("SELECT SUM(d.mort) FROM DailyReportData d WHERE d.farmerId = :farmerId AND d.batchId = :batchId AND d.batchNo = :batchNo")
public long gettotalmortbirds(
    @Param("farmerId") String farmerId,
    @Param("batchId") long batchId,
    @Param("batchNo") long batchNo
);


}
