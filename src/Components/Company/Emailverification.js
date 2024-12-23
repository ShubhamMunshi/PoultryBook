import axios from "axios";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Emailverification.css"
import { addCompany, apiUrl } from "../../Api/AllApis";
import { ToastContainer, toast } from "react-toastify";


export const Emailverification=()=>{

    const location = useLocation();
    const sdata = location.state; 
    console.log(sdata);
    const emailval = sdata.companyemail;
    console.log(emailval);

    // const emailval = location.state.Companyobje.companyemail;

    const [email, setEmail] = useState(emailval);
  const [otp, setOTP] = useState('');
//   const [message, setMessage] = useState('');

  const sendOTP = async () => {
    try {
     await axios.post(`${apiUrl}/sendotp`,{email}).then((res)=>{
        toast.success("otp sent successfully!",{position:'top-right'});

     
     })
     
    } catch (error) {
        toast.error("error while sending otp",{position:'top-right'});
    //   setMessage('An error occurred while sending the OTP.');
    }
  };

  const verifyOTP = async () => {
    try {
      await axios.post(`${apiUrl}/verify`, { otp }).then((res)=>{
        
        if(res===true)
        {
         toast.success("otp verified !!",{position:'top-center',autoClose:1000});
        }


        if(res===false)
        {
         toast.error("Incorrect Otp",{position:'top-right'});
        }
        setTimeout(()=>{
         if(res.data === true)
         {
           console.log("Data Saved");
           addCompany(sdata).then((Res)=>{
             toast.success("Registered Successfully !",{position:'top-right'});
              setTimeout(()=>{
                document.getElementById("kul").click();
              },3000)
           })
           
         }  },1200);
      // Proceed with saving data if verification is successful
    //   if (res.data.success) {
    //     // Call API to save data
    //     console.log("Data Saved");
    //   }
      })
      
    } catch (error) {
            toast.error("otp not verified !",{position:'top-right'});
    }
  };

  return ( <>
    <ToastContainer/>
    <div className="emailvarify">
     
      <h2 style={{textAlign:'center', fontSize:'xx-large',textShadow:'1.2px 1.2px yellowgreen'}}>Email Verification</h2>
    
      <div id="container-2">
       <div>
         <label for="username"> <h3 > OTP will be sent to { emailval }  </h3></label> 
    </div>
     
      <button onClick={sendOTP}>Send OTP</button>
      
     
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOTP(e.target.value)}
      />
     
    
     <button onClick={verifyOTP}>Verify OTP</button>
    
     
     
    </div>
  


      
    

     

     
     

     <Link to="/home/Companylogin" id="kul"></Link>
    </div>
    </>);


}