package com.dac.project.services;

import com.dac.project.model.BatchRegistration;
import com.dac.project.model.CloseBatch;
import com.dac.project.model.Dailyrpforfarmerfetch;

public interface BatchRegistrationService {
         public void saveBatch(BatchRegistration batchRegistration);

		public BatchRegistration getbatchdetai(String farmid);

		public void closebatchh(CloseBatch clbatch);

		public long gettotalbirds(Dailyrpforfarmerfetch batch);
}
