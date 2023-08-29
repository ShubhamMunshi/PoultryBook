import { Link } from "react-router-dom";
import  "../Company/CRegister.css"
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';


import { addCompany } from "../../Api/AllApis";
import { ToastContainer, toast } from "react-toastify";

export const CRegister=()=>
{
  
  
  
  
   

    const[ companyname , setcompanyname] = useState("");
    const[ ownername , setownername] =useState("");
    const[ companyemail,setcompanyemail] =useState("");
    const[ companycontact ,setcompanycontact] =useState("");
    
    const[companyaddress,setcompanyaddress]=useState("");
    const[companyusername,setcompanyusername]=useState("");
    const[companypassword,setcompanypassword]=useState("");
    const[aboutcompany,setaboutcompany]=useState("");
    const Company = {companyname,ownername,companyemail,companycontact,companyaddress,companyusername,companypassword,aboutcompany};

   const handlecompinfo = async(e)=>{
          e.preventDefault();
          // const Company = {companyname,ownername,companyemail,companycontact,companyaddress,companyusername,companypassword,aboutcompany};
         

          for (const key in Company) {
            if (Company[key] === undefined || Company[key] === null || Company[key] === '')
             {
              toast.error("kuch to data dal de bhai",toast.POSITION.TOP_RIGHT);
      
              return false;
            }
          
         


      else{
        console.log(Company);
           if( await addCompany(Company))
            {
            showbanner();
            }    
         
        }
     }
  }



     const showbanner = () => {
      console.log("calling toast");
      toast.success('Company Registered Successfully!', {
          position: toast.POSITION.TOP_CENTER
      });
  };


    return(<>
  




<div id="outside"> 
 <div id="main2"> 

        <h2>Company Registration Form</h2>
        <form method="post" >
          <div className="form-group">
            <label for="companyname"><i className="fas fa-building"></i> Company Name</label>
            <input type="text" className="form-control" id="companyname" placeholder="Enter company name" required value={companyname} onChange={(e)=>{setcompanyname(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label for="ownername"><i className="fas fa-user"></i> Owner Name</label>
            <input type="text" className="form-control" id="ownername" placeholder="Enter owner name" required value={ownername} onChange={(e)=>{setownername(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label for="companyemail"><i className="fas fa-envelope"></i> Company Email</label>
            <input type="email" className="form-control" id="companyemail" placeholder="Enter company email" required value={companyemail} onChange={(e)=>{setcompanyemail(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label for="companycontact"><i className="fas fa-phone"></i> Company Contact</label>
            <input type="tel" className="form-control" id="companycontact" placeholder="Enter company contact" required value={companycontact} onChange={(e)=>{setcompanycontact(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label for="address"><i className="fas fa-map-marker-alt"></i> Address</label>
            <input type="text" className="form-control" id="address" placeholder="Enter company address" required value={companyaddress} onChange={(e)=>{setcompanyaddress(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label for="companyId"><i className="fas fa-id-card"></i> Company UserName</label>
            <input type="text" className="form-control" id="companyId" placeholder="Enter company UserName" required value={companyusername} onChange={(e)=>{setcompanyusername(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label for="password"><i className="fas fa-lock"></i> Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter password" required value={companypassword} onChange={(e)=>{setcompanypassword(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label for="confirmPassword"><i className="fas fa-lock"></i> Confirm Password</label>
            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" required/>
          </div>
          <div className="form-group">
            <label for="aboutcompanyany"><i className="fas fa-info-circle"></i> About Company</label>
            <textarea className="form-control" id="aboutcompanyany" rows="4" placeholder="Enter information about the company" value={aboutcompany} onChange={(e)=>{setaboutcompany(e.target.value)}}></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-block" onClick={handlecompinfo}><i className="fas fa-check" ></i> Submit</button>
               <ToastContainer/>
        
        </form>

       
      </div>
    </div>
  
 

 



</>)
}