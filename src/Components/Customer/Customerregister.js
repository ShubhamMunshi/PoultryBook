
import { ToastContainer, toast } from "react-toastify";
import "./Customerregister.css"
import { useState } from "react";
import { addCustomer } from "../../Api/AllApis";
export const Customerregister=()=>{

    const[ customername , setcustomername] = useState("");
    const[ customeremail,setcustomeremail] =useState("");
    const[ customercontact ,setcustomercontact] =useState();
     
    const[customeraddress,setcustomeraddress]=useState("");
    const[companyid,setcompanyid]=useState(localStorage.getItem("compIdVar"));
     
    const Customer = {customername,customeremail,customercontact,customeraddress,companyid};

   const handlecustinfo = async(e)=>{
          e.preventDefault();
          
          console.log(Customer);
       if(await addCustomer(Customer))
          {
           toast.success("customer added",{position:'top-right'});
          }
        
         
   }



    


    return(<>
    
    <div id="outside"> 
 <div id="main2"> 

        <h2>Customer Registration Form</h2>
        <form  >
          <div className="form-group">
            <label for="customername"><i className="fas fa-building"></i> Customer Name</label>
            <input type="text" className="form-control" id="companyname" placeholder="Enter Customer name" required  onChange={(e)=>{setcustomername(e.target.value)}}/>
          </div>

          <div className="form-group">
            <label for="customeremail"><i className="fas fa-envelope"></i> Customer Email</label>
            <input type="email" className="form-control" id="companyemail" placeholder="Enter company email" required  onChange={(e)=>{setcustomeremail(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label for="customercontact"><i className="fas fa-phone"></i> Customer Contact</label>
            <input type="tel" className="form-control" id="companycontact" placeholder="Enter company contact" required  onChange={(e)=>{setcustomercontact(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label for="address"><i className="fas fa-map-marker-alt"></i> Address</label>
            <input type="text" className="form-control" id="address" placeholder="Enter company address" required  onChange={(e)=>{setcustomeraddress(e.target.value)}}/>
          </div>
          <button type="submit" className="btn btn-primary btn-block" onClick={handlecustinfo}><i className="fas fa-check" ></i> Submit</button>
               <ToastContainer/>
        
        </form>

       
      </div>
    </div>
     
    
    
    </>)
}