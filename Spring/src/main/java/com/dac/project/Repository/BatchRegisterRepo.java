package com.dac.project.Repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.dac.project.model.BatchRegistration;


public interface BatchRegisterRepo extends CrudRepository<BatchRegistration,Long> {

	
	
	
	
	@Query("select b from BatchRegistration b where b.farmerId= :n and b.batchId = (select max(bb.batchId) from BatchRegistration bb where bb.farmerId=:n)")
	public BatchRegistration getbatch(@Param("n") String farmid);



	
	
//	 @Query("UPDATE BatchRegistration b SET b.someColumn = :newValue WHERE b.farmerId = :farmerId AND b.batchId = (SELECT MAX(bb.batchId) FROM BatchRegistration bb WHERE bb.farmerId = :farmerId)")
//	public void closecurrentbatch(@Param("n") CloseBatch clbatch);
//       
	
}
