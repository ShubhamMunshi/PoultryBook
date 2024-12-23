import * as React from 'react';
import {Routes , Route, BrowserRouter as Router, Link} from 'react-router-dom';

import './App.css';
import { DashV1 } from "./Components/Dashboard/Dashv1";
import { FLogin } from './Components/Farmer/FLogin';

import { CLogin } from './Components/Company/CLogin';
import { CRegister } from './Components/Company/CRegister';
import { FRegister } from './Components/Farmer/FRegister';
import { FDash } from './Components/Farmer/FDash';
import { FDailyReport } from './Components/Farmer/FDailyReport';
// import { DarkModeToggle } from './Components/Features/Darkmode';
import { FProblemSuggestion } from './Components/Farmer/FProblemSuggestion';
import { Fdata } from './Components/Farmer/FarmerData';
import UserProfileCard from './Components/Farmer/UserProfileCard';
import { FarmerDetails } from './Components/Company/FarmerDetails';

import 'react-toastify/dist/ReactToastify.css';
// import { useState } from 'react';
import './Components/Navbar/NavV2.css';
import logo from  "./Images/AppLogo.png" ;
import { About } from './Components/Dashboard/About';
import { CDash } from './Components/Company/CDash';
import { CreateBatch } from './Components/Farmer/CreateBatch';
import { Dailyreportoptions } from './Components/Farmer/Dailyreportoptions';
import { FamerDailyRpDisp } from './Components/Company/FamerDailyRpDisp';
import { Getreport } from './Components/Farmer/Getreport';
import { useEffect } from 'react';
import { NavV1 } from './Components/Navbar/NavV1';
import { Problmefromfarmer } from './Components/Company/Problmefromfarmer';
import { MyComponent } from './Components/Company/DemoFramer';
import { Suggestion } from './Components/Company/Suggestion';
import { Emailverification } from './Components/Company/Emailverification';
import { Learningfarmer } from './Components/Farmer/Learningfarmer';
import { Customerregister } from './Components/Customer/Customerregister';
import { Customerlist } from './Components/Customer/Customerlist';




function App() {
  
     document.title="Poultry Book";
  

 
  return (  <div className="App">
  <Router>
  


<NavV1/>


    <Routes>
      <Route path='/kk' element={<MyComponent/>}/>
      <Route path="/"  element={<DashV1 />} />
      <Route path="/home/Farmerlogin" element={<FLogin />} />
      <Route path="/home/Companylogin" element={<CLogin />} />
      <Route path="/Companylogin/CompanyRegistration" element={<CRegister />} />
      <Route path="/FarmerRegistration" element={<FRegister />} />
      <Route path="/Farmerlogin/dashboard" element={<FDash/> }/>
      <Route path="/Farmerlogin/dashboard/dailyreport" element={<FDailyReport />} />
      <Route path="/Farmerlogin/dashboard/problemsolution" element={<FProblemSuggestion />} />
      <Route path="/Farmerlogin/dashboard/problemsolution/data" element={<Fdata />} />
      <Route path="/Farmerlogin/dashboard/profile" element={<UserProfileCard />} />
      <Route path="/CompanyLogin/CDash/farmersList" element={<FarmerDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/Companylogin/CDash" element={<CDash />} />
      <Route path='/create' element={<CreateBatch/>}/>
      <Route path='/dailyreportoption' element={<Dailyreportoptions/>}/>
      <Route path='/GetFarmerDailyReport' element={<FamerDailyRpDisp/>}/>
      <Route path='/Getreportforfarmer' element={<Getreport/>} />
      <Route path='/farmerproblems' element={<Problmefromfarmer/>} />
      <Route path='/gievsuggestinforprob' element={<Suggestion/>}/>
      <Route path='/verifycompany' element={<Emailverification/>}/>
      <Route path='/learnforfarmer' element={<Learningfarmer/>}/>
      <Route path='/customerregister' element={<Customerregister/>}/>
      <Route path='/customers' element={<Customerlist/>}/>
    </Routes>
  </Router>
</div> );
}

export default App;
