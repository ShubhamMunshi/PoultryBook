// import { Link } from "react-router-dom";
import "../Farmer/FRegister.css"
import { useState } from "react";
import { addfarmer } from "../../Api/AllApis";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Link } from "react-router-dom";
import axios from "axios";
export const FRegister=()=>
{
    
    // const validateForm=()=> {
    //     var password = document.getElementById("password").value;
    //     var confirmPassword = document.getElementById("confirmPassword").value;
    //     var passwordMessage = document.getElementsByclassNameName("password-message");
  
    //     if (password.length < 8) {
    //       passwordMessage[0].textContent = "Password should be at least 8 characters long";
    //       passwordMessage[0].classNameList.add("show");
    //       return false;
    //     } else {
    //       passwordMessage[0].classNameList.remove("show");
    //     }
  
    //     if (password !== confirmPassword) {
    //       passwordMessage[1].textContent = "Passwords do not match";
    //       passwordMessage[1].classNameList.add("show");
    //       return false;
    //     } else {
    //       passwordMessage[1].classNameList.remove("show");
    //     }
  
    //     return true;
    //   }
        // const farmdetail={
        //   farmName:"",
        //   gender:"",
        //   date:"",
        //   mobileNo:"",
        //   farmAddress:"",
        //   farmTaluka:"",
        //   farmDist:"",
        //   farmState:"",
        //   pincode:"",
        //   farmerId:"",
        //   farmPass:"" 
        // }



   
       
      const[farmName,setfarmName] = useState("");
      const[gender,setgender] = useState("");
      const[date,setdate] =useState("");
      const[mobileNo,setmobileNo] =useState();
      const[adharNo ,setadharno]=useState("");
      const[farmAddress,setfarmAddress] =useState("");
      const[farmTaluka,setfarmTaluka] =useState("");
      const[farmDist,setfarmDist] =useState("");
      const[farmState,setfarmState] =useState("");
      const[pincode,setpincode] =useState();
      const[farmerId ,setfarmerId] =useState("");
      const[farmPass, setfarmPass] =useState("");
      const [sevenA, setSelectedFile] = useState(null);
      const [eightA, setSelectedFile2] = useState(null);
       
   
         const companyId = localStorage.getItem("compIdVar");
      const Farmer = {farmName,gender,date,mobileNo,farmAddress,farmTaluka,farmDist,farmState,pincode,farmerId,farmPass ,companyId,sevenA,eightA,adharNo};
     
      
      const handlefarminfo = async(e)=>
      {

        e.preventDefault();
        console.log(Farmer);

        for (const key in Farmer) {
          if ((Farmer[key] === undefined || Farmer[key] === null || Farmer[key] ==="")&&(Farmer[companyId])===null)
           {
            toast.error("kuch to data dal de bhai",{position:'top-right'});
    
            return false;
          }
        
        }
     
          console.log("Before data:",Farmer);
        if( await addfarmer(Farmer))
        {
          
          
         
          Farmer.date="";Farmer.farmAddress="";Farmer.farmName="";Farmer.farmPass="";Farmer.farmDist="";Farmer.farmTaluka=""
          ;Farmer.farmState="";Farmer.pincode="";Farmer.gender="";Farmer.mobileNo="";Farmer.farmerId="";Farmer.adharNo="";
          Farmer.eightA="";Farmer.sevenA="";Farmer.companyId="";

          console.log("AFTER:",Farmer);

          document.getElementById("rstbtn").click();
          document.getElementById("gotodash").click();
          setTimeout((function(){
            toast.success("Registartion Successful!!",{position:'top-right'});
          }),1000);
        }
        else{
          toast.error("error on server",{position:'top-right'});
        }

      }
    


 
    return(<>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

   <div className="fregisterpg">
    <div id="main3"> 
       <div id="outsidef">

        <h2>Farmer Registration Form</h2>
        <form method="post" encType="">
          <div className="form-group">
            <label for="farmerName"><i className="fas fa-building"></i> Farmer Name</label>
            <input type="text" className="form-control" id="farmerName" placeholder="Enter Farmer Name" required onChange={(e)=>{setfarmName(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label for="gender"><i className="fas fa-user"></i>Gender</label>
            <input type="text" className="form-control" id="gender" placeholder="Gender" required onChange={(e)=>{setgender(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label for="dateofbirth"><i className="far fa-calendar"></i>  Date Of Birth </label>
            <input type="date" className="form-control" id="farmerEmail" placeholder="Date Of Birth" required onChange={(e)=>{setdate(e.target.valueAsDate)}}/>
          </div>
          <div className="form-group">
            <label for="farmerContact"><i className="fas fa-phone"></i> Farmer Contact</label>
            <input type="tel" className="form-control" id="farmerContact" placeholder="Enter Farmer contact" required onChange={(e)=>{setmobileNo(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label for="address"><i className="fas fa-map-marker-alt"></i> Address</label>
            <input type="text" className="form-control" id="address" placeholder="Enter farmer address" required onChange={(e)=>{setfarmAddress(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label for="taluka"><i className="fas fa-map-marker-alt"></i>Taluka</label>
            <select onChange={(e)=>{setfarmTaluka(e.target.value)}}>  
              <option >----</option>
              <option>barmati</option>
              <option> indapur</option>
              <option>AhmedNagar</option>
            </select> 
          </div>
          <div className="form-group">
            <label for="district"><i className="fas fa-map-marker-alt"></i> District</label>
            <select onChange={(e)=>{setfarmDist(e.target.value)}}>  
              <option>AhmedNagar</option>
              <option>Pune</option>
              <option>Nashik</option>
            </select> 
          </div>
          <div className="form-group">
            <label for="state"><i className="fas fa-map-marker-alt"></i> State</label>
            <select onChange={(e)=>{setfarmState(e.target.value)}}>  
              <option>Maharashtra</option>
              <option>Madhya Pradesh</option>
              <option>Karnatak</option>
              <option>Gujarat</option>
              <option>Rajsthan</option>
            </select> 
          </div>
          <div className="form-group">
            <label for="pin"><i className="fas fa-map-marker-alt"></i> Pin/Zip Code</label>
            <input type="number" className="form-control" id="pin" placeholder="Enter Pin Code" required onChange={(e)=>{setpincode(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label for="aadhar"><i className="fas fa-pen"></i> Enter Aadhar Number</label>
            <input type="number" className="form-control" id="aadhar" placeholder="Enter Aadhar No." required onChange={(e)=>{setadharno(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label for="seven"><i className="fas fa-image"></i> Upload 7/12 </label>
            <input type="file"  id="seven" placeholder="Upload Photo Here " onChange={(e)=>{setSelectedFile(e.target.files[0])}} />
            <button onClick={()=>{  const formData = new FormData();
        formData.append('file', sevenA);
        
    
        axios.post('http://localhost:8080/upload', formData)
          .then(response => {
            console.log(response.data);
            setSelectedFile(response.data);
            toast.success("Image upload successful", {position:'top-right'});
          })
          // axios.post('http://192.168.29.85:8080/upload', formData)
          // .then(response => {
          //   console.log(response.data);
          //   setSelectedFile(response.data);
          // })
          .catch(error => {
            toast.error("Image upload failed",{position:'top-right'});
            console.error(error);
          });}}>Upload</button>


          </div>
          <div className="form-group">
            <label for="eight"><i className="fas fa-image"></i> Upload 8/A </label>
            <input type="file"  id="eight" placeholder="Upload Photo Here " onChange={(e)=>{setSelectedFile2(e.target.files[0])}} /> 
            <button onClick={()=>{
              const formData = new FormData();
               formData.append('file',eightA);
               axios.post('http://localhost:8080/upload', formData)
              //  axios.post('http://192.168.29.85:8080/upload', formData)
               .then(response => {
                 console.log(response.data);
                 setSelectedFile2(response.data);
                 toast.success(" Image upload successful", {position:'top-right'});
               })
               .catch(error => {
                toast.error("Image upload failed",{position:'top-right'});
                 console.error(error);
               });

             }}>Upload</button>
          </div>
          <div className="form-group">
            <label for="farmerId"><i className="fas fa-pen"></i> Farmer Id </label>
            <input type="text" className="form-control" id="farmerId" placeholder="Enter Farmer Id " required onChange={(e)=>{setfarmerId(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label for="password"><i className="fas fa-pen"></i> Enter Password </label>
            <input type="password" className="form-control"  id="password" placeholder="Enter Password " required onChange={(e)=>{setfarmPass(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label for="confirmpassword"><i className="fas fa-pen"></i> Confirm Password </label>
            <input type="password" className="form-control"  id="confirmpassword" placeholder="confirm Password " required/>
          </div>
          
         

          {/* <!-- <div className="form-group">
            <label for="aboutCompany"><i className="fas fa-info-circle"></i> About Company</label>
            <textarea className="form-control" id="aboutCompany" rows="4" placeholder="Enter information about the company"></textarea>
          </div> --> */}
          <button type="submit" className="submitbtnn" onClick={handlefarminfo}><i className="fas fa-check" ></i > Submit</button>
          <Link to="/Companylogin/CDash" id="gotodash"></Link>
          
          <input type="reset" id="rstbtn"/>
                               <ToastContainer/>
        
        </form>
      </div>

      </div>


      </div>

 

    
    
    
    
    </>)
}
